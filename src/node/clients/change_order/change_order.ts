import console = require('console')

import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

import type { ChangeOrder } from '../../typings/checkout'
import { AmbientePpal } from '../../utils/constants'

export class CheckoutClient extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...(options && options.headers),
        ...(ctx.adminUserAuthToken
          ? {
              VtexIdclientAutCookie: ctx.adminUserAuthToken,
              'Proxy-Authorization': ctx.adminUserAuthToken,
            }
          : null),
        'x-vtex-user-agent': ctx.userAgent,
      },
    })
  }

  /**
   * ChangeOrder
   */
  public async changeOrder(data: ChangeOrder) {
    // Validar que el cliente este creado - consumir getClientProfile
    // Desencriptar el email
    let emaild = ''
    const email = await this.getEmail(data.email)

    if (email == null) {
      const responsePlaceOrder: any = {}

      responsePlaceOrder.error = {
        message: 'ERROR No se puede desencriptar el email',
      }

      return responsePlaceOrder
    }

    if (email?.email.includes('ct.vtex.com.br')) {
      const email2 = await this.getEmailPpal(email.email)

      if (email2 == null) {
        const emailppal = await this.getEmail(email.email)

        emaild = (await emailppal).email
      } else {
        emaild = (await email2).email
      }
    } else {
      emaild = (await email).email
    }

    const emailDecryp: string = emaild
    const responseClient = await this.getClientProfile(emailDecryp)
    const { userProfileId } = await responseClient

    if (userProfileId != null) {
      // Consumir servicio de crear orden Place order
      const mket: any = await this.getMket()

      const responsePlaceOrder: any = await this.setPlaceOrder(
        mket,
        data,
        responseClient
      )

      if (responsePlaceOrder?.transactionData != null) {
        responsePlaceOrder.orders.forEach(
          async (order: {
            shippingData: { address: { addressId: string } }
            orderGroup: string
          }) => {
            const addressId: string = order?.shippingData?.address?.addressId
            const { orderGroup } = order

            // Enviar la información de pago
            responsePlaceOrder.transactionData.merchantTransactions.forEach(
              (merchant: {
                transactionId: string
                merchantName: string
                payments: any[]
              }) => {
                const { transactionId } = merchant
                const { merchantName } = merchant

                merchant.payments.forEach(
                  async (payment: { paymentSystem: string; value: number }) => {
                    const { paymentSystem } = payment
                    const { value } = payment

                    merchant.payments.forEach(async () => {
                      const requestCreateTransaction: [
                        RequestCreateTransaction
                      ] = [
                        {
                          paymentSystem,
                          value,
                          referenceValue: value,
                          installments: '1',
                          fields: {
                            addressId,
                          },
                          transaction: {
                            id: transactionId,
                            merchantName,
                          },
                          currencyCode: 'COL',
                        },
                      ]

                      await this.createTx(
                        requestCreateTransaction,
                        transactionId
                      )

                      // SEND to WL 5- AUTHORIZE TRANSACTION
                      const requestAuthorizeOrder: any = {
                        transactionId,
                        prepareForRecurrency: false,
                      }

                      await this.authorizeOrder(
                        requestAuthorizeOrder,
                        merchantName,
                        transactionId
                      )

                      // 6- GATEWAY CALLBACK
                      const requestCallback: any = {
                        orders: [
                          {
                            orderId: `${orderGroup}-01`,
                            orderGroup,
                            state: 'order-created',
                          },
                        ],
                      }

                      await this.sendgatewayCallback(
                        requestCallback,
                        orderGroup
                      )
                      // 7- Cancel Order
                      await this.cancelOrder(data.orderId, data.sellerOrder)
                      // 8- Delete address
                      await this.deleteAddress(addressId, mket)
                    })
                  }
                )
              }
            )
          }
        )
        responsePlaceOrder.error = { message: 'ORDEN CREADA CORRECTAMENTE' }

        return responsePlaceOrder
      }

      if (responsePlaceOrder?.error != null) {
        return responsePlaceOrder
      } else {
        const responsePlaceOrder: any = {}

        responsePlaceOrder.error = {}

        return responsePlaceOrder
      }
    }

    const responsePlaceOrder: any = {}

    responsePlaceOrder.error = {
      message: 'ERROR No se encuentra el cliente',
    }

    return responsePlaceOrder

    return null
  }

  /**
   * getClientProfile
   */
  public async getMket() {
    try {
      const URI = this.routes.getMket()
      const response: any = await this.http.get(URI)

      return response?.parentAccountName == null
        ? response?.accountName
        : response?.parentAccountName
    } catch (error) {
      return AmbientePpal
    }
  }

  /*
   * getClientProfile
   */
  public async getClientProfile(email: string) {
    const URI = this.routes.clientProfile(email)
    const response: any = await this.http.get(URI, {
      params: { an: AmbientePpal },
    })

    return response
  }

  /**
   * getClientProfile
   */
  public async getEmail(email: string) {
    const URI = this.routes.getEmail(email)
    const response = await this.http.get(URI, {
      headers: { 'X-VTEX-Use-Https': 'true' },
      params: {
        an: this.context.account,
      },
    })

    return response
  }

  /**
   * getClientProfile
   */
  public async getEmailPpal(email: string) {
    const URI = this.routes.getEmailPpal(email)
    const response = await this.http.get(URI, {
      headers: { 'X-VTEX-Use-Https': 'true' },
      params: {
        an: AmbientePpal,
      },
    })

    return response
  }

  /**
   * setOrder paso 3- CREATE ORDER
   */
  public async setPlaceOrder(mket: string, data: any, client: any) {
    let address: any
    let existaddress = false

    client?.availableAddresses.forEach((element: any) => {
      if (element?.addressId == data.shippingData.address.addressId) {
        address = {
          addressType: element.addressType,
          receiverName: element.receiverName,
          postalCode: element.postalCode,
          city: element.city,
          state: element.state,
          country: element.country,
          street: element.street,
          number: element.number,
          neighborhood: element.neighborhood,
          complement: element.complement,
          geoCoordinates: JSON.parse(
            data?.shippingData?.address?.geoCoordinates
          ),
        }
        existaddress = true
      }
    })
    if (existaddress) {
      // construir objeto para crear la orden
      const logisticsInfo: Array<{}> = []

      data.itemsOrder.forEach((element: any, i: number) => {
        console.log(element)
        if (i == 0) {
          const itm = {
            itemIndex: i,
            selectedSla: data.shippingData.logisticsInfoOrder.selectedSla,
            price: data.shippingData.logisticsInfoOrder.price,
            shippingEstimate:
              data.shippingData.logisticsInfoOrder.shippingEstimate,
            deliveryWindow: data.shippingData.logisticsInfoOrder.deliveryWindow,
          }

          logisticsInfo.push(itm)
        } else {
          const itm = {
            itemIndex: i,
            selectedSla: data.shippingData.logisticsInfoOrder.selectedSla,
            price: 0,
            shippingEstimate:
              data.shippingData.logisticsInfoOrder.shippingEstimate,
            deliveryWindow: data.shippingData.logisticsInfoOrder.deliveryWindow,
          }

          logisticsInfo.push(itm)
        }
      })
      const itemsNewOrder: Array<{}> = []

      data.itemsOrder.forEach(
        (element: {
          id: any
          quantity: any
          seller: any
          price: any
          attachments: any
          priceTags: any
        }) => {
          const items: any = {
            id: element.id,
            quantity: element.quantity,
            seller: element.seller,
            price: element.price,
            priceTags: element.priceTags,
            attachments: JSON.parse(element.attachments),
          }

          itemsNewOrder.push(items)
        }
      )
      const req = {
        clientProfileData: client?.userProfile,
        items: itemsNewOrder,
        shippingData: {
          address,
          logisticsInfo,
        },
        paymentData: data.paymentData,
        openTextField: { value: data.coments },
      }

      console.log('data', JSON.stringify(req))
      try {
        const URI = this.routes.placeOrder(mket)
        const response: any = await this.http.put(URI, req, {
          params: { an: AmbientePpal },
        })

        return response
      } catch (error) {
        const responsePlaceOrder: any = {}

        if (error?.response?.data?.orderForm?.messages != null) {
          error?.response?.data?.orderForm?.messages.forEach((element: any) => {
            responsePlaceOrder.error = {
              message: element?.text,
            }
          })
          responsePlaceOrder.error.totalizers =
            error?.response?.data?.orderForm?.totalizers
        } else if (error?.response?.data?.error != null) {
          responsePlaceOrder.error = {
            message: error?.response?.data?.error?.message,
          }
        } else {
          responsePlaceOrder.error = {
            message: error?.response?.data,
          }
        }

        return responsePlaceOrder
      }
    } else {
      const responsePlaceOrder: any = {}

      responsePlaceOrder.error = {
        message: 'ESTA ORDEN YA FUE TRANSFERIDA ',
      }

      return responsePlaceOrder
    }
  }

  /**
   * createTx paso 4- CREATE TRANSACTION
   */
  public async createTx(
    data: [RequestCreateTransaction],
    transactionId: string
  ) {
    const URI = this.routes.sendPaymentsInformation(transactionId)

    try {
      const response: any = await this.http.post(URI, data, {
        params: { an: AmbientePpal },
      })

      return response
    } catch (error) {
      console.log('Error TX ..', error.response.data)
    }
  }

  /**
   * 5- AUTHORIZE TRANSACTION
   */
  public async authorizeOrder(
    data: any,
    seller: string,
    transactionId: string
  ) {
    const URI = this.routes.authorizeOrder(seller, transactionId)

    try {
      const response: any = await this.http.post(URI, data, {
        params: { an: seller },
      })

      return response
    } catch (error) {
      console.log('ERROR AUTH ..', error.response)
    }
  }

  /**
   * 6- GATEWAY CALLBACK
   */
  public async sendgatewayCallback(data: any, orderGroup: string) {
    try {
      const response = await this.http.post(
        this.routes.gatewayCallback(orderGroup),
        data,
        {
          params: { an: AmbientePpal },
        }
      )

      return response
    } catch (error) {
      console.log('ERROR CALLBACK ..', error.response.data)
    }
  }

  /**
   * 7- DELETE ADDRESS
   */
  public async deleteAddress(addressId: string, sellerId: string) {
    try {
      const URIsearch = this.routes.searchAddress(sellerId)
      const search: any = await this.http.get(URIsearch, {
        params: {
          addressName: addressId,
          an: sellerId,
        },
        headers: {
          VtexIdclientAutCookie: this.context.adminUserAuthToken,
        },
      })

      if (search?.[0]?.id) {
        const URI = this.routes.deleteAddress(search?.[0]?.id, sellerId)

        await this.http.delete(URI, {
          params: {
            an: sellerId,
          },
          headers: {
            VtexIdclientAutCookie: this.context.adminUserAuthToken,
          },
        })
      } else {
        console.log('NO EXISTE LA DIRECCIÓN')
      }
    } catch (error) {
      console.log('Error DELETE ..', error?.response?.data)
    }
  }

  /**
   * 7- CANCEL ORDER
   */
  public async cancelOrder(orderId: string, sellerId: string) {
    try {
      const URI = this.routes.cancelOrder(orderId)
      const response: any = await this.http.post(URI, {
        params: { an: sellerId },
      })

      if (response?.receipt == null) {
        const URI = this.routes.cancelOrder(orderId)

        await this.http.post(URI, {
          params: { an: sellerId },
        })
      }

      return response
    } catch (error) {
      console.log('Error CANCEL ORDER ..', error.response.data)

      return error
    }
  }

  private get routes() {
    const baseChecoukt = `https://${AmbientePpal}.vtexcommercestable.com.br/api/checkout/pub/`

    const baseTx = `https://${AmbientePpal}.vtexpayments.com.br/api/pub/transactions/`

    const baseTxWL = '.vtexpayments.com.br/api/pvt/transactions/'
    const baseEmail =
      'https://conversationtracker.vtex.com.br/api/pvt/emailMapping'

    const gatewayCallback = `https://${AmbientePpal}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/`

    const deleteAdress = '.vtexcommercestable.com.br/api/dataentities/AD/'
    const cancelOrder = '/api/oms/pvt/orders/'
    const getMket = '/api/vlm/account'

    return {
      clientProfile: (email: string) =>
        `${baseChecoukt}profiles?email=${email}`,

      placeOrder: (mket: string) =>
        `https://${mket}.vtexcommercestable.com.br/api/checkout/pub/orders`,
      sendPaymentsInformation: (transactionId: string) =>
        `${baseTx}${transactionId}/payments`,
      processOrder: (orderGroup: string) =>
        `${baseTx}gatewayCallback/${orderGroup}`,
      getEmail: (email: string) => `${baseEmail}?alias=${email}`,
      getEmailPpal: (email: string) => `${baseEmail}?alias=${email}`,
      authorizeOrder: (seller: string, transactionId: string) =>
        `https://${seller}${baseTxWL}${transactionId}/authorization-request`,
      gatewayCallback: (orderGroup: string) =>
        `${gatewayCallback}${orderGroup}`,
      searchAddress: (sellerId: string) =>
        `https://${sellerId}${deleteAdress}search`,
      deleteAddress: (addressId: string, sellerId: string) =>
        `https://${sellerId}${deleteAdress}documents/${addressId}`,
      cancelOrder: (orderId: string) => `${cancelOrder}${orderId}/cancel`,
      getMket: () =>
        `https://${this.context.account}.vtexcommercestable.com.br${getMket}`,
    }
  }
}
12
