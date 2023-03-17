import { ChangeOrder } from "../typings/checkout"
import { setOrder } from "./set_order"

export async function changeOrder(
    _: any,
    { data }: { data: ChangeOrder },
    { clients: { decrypClient  , market , checkoutExternal ,paymentExternal ,omsExternal , masterData} }: Context
   ) {
    try {
      //Desencriptar el email
      let mket = await market.getMarket()
      let account = mket?.haveParentAccount ? mket?.parentAccountName : mket?.accountName ;
      let email
      email = await decrypClient.decrypEmail (`?alias=${data.email}`, data.sellerOrder)
     if (email == null) {
      email = await decrypClient.decrypEmail (`?alias=${data.email}`, account)
      if (email == null) {
        const responsePlaceOrder: any = {}
        responsePlaceOrder.error = {
          message: 'ERROR No se puede desencriptar el email',
        }
        return responsePlaceOrder
      }
    }
    if (email?.email.includes('ct.vtex.com.br')) {
      email = await decrypClient.decrypEmail(`?alias=${email.email}`, mket.parentAccountName )
      if (email == null) {

      const responsePlaceOrder: any = {}
      responsePlaceOrder.error = {
        message: 'ERROR No se puede desencriptar el email',
      }
      return responsePlaceOrder
      } else {
        email = await email.email
      }
    }else{
      email = await email.email
    }
    //GET CLIENT PROFILE
    const responseClient = await checkoutExternal.clientProfile (email , account)
    const userProfileId: string = (await responseClient).userProfileId
    if (await userProfileId != null) {
      //Consumir servicio de crear orden Place order
      const responseSetOrder: any = await setOrder(data, responseClient)
      if(await responseSetOrder.error == null){
      //SET ORDER
      try {
        const responsePlaceOrder: any = await checkoutExternal.setNewOrder(responseSetOrder , account)
        if (await responsePlaceOrder?.transactionData != null) {
          responsePlaceOrder.orders.forEach(
            async (order: {
              shippingData: { address: { addressId: string } }
              orderGroup: string
            }) => {
              const addressId: string = order?.shippingData?.address?.addressId
              const orderGroup: string = order.orderGroup
              //Enviar la información de pago
              responsePlaceOrder.transactionData.merchantTransactions.forEach(
                (merchant: {
                  transactionId: string
                  merchantName: string
                  payments: any[]
                }) => {
                  const transactionId: string = merchant.transactionId
                  const merchantName: string = merchant.merchantName
                  merchant.payments.forEach(
                    async (payment: { paymentSystem: string; value: number }) => {
                      const paymentSystem: string = payment.paymentSystem
                      const value: number = payment.value
                      merchant.payments.forEach(async () => {
                        const requestCreateTransaction: [
                          RequestCreateTransaction
                        ] = [
                          {
                            paymentSystem: paymentSystem,
                            value: value,
                            referenceValue: value,
                            installments: '1',
                            fields: {
                              addressId: addressId,
                            },
                            transaction: {
                              id: transactionId,
                              merchantName: merchantName,
                            },
                            currencyCode: 'COL',
                          },
                        ]
                        await paymentExternal.createTransaction(
                          account,
                          transactionId,
                          requestCreateTransaction
                        )

                        //SEND to WL 5- AUTHORIZE TRANSACTION
                        const requestAuthorizeOrder: any = {
                          transactionId: transactionId,
                          prepareForRecurrency: false,
                        }

                        await paymentExternal.authorizationTransaction(
                          data.itemsOrder[0].seller,
                          transactionId,
                          requestAuthorizeOrder
                        )

                        // 6- GATEWAY CALLBACK
                        const requestCallback: any = {
                          orders: [
                            {
                              orderId: orderGroup + '-01',
                              orderGroup: orderGroup,
                              state: 'order-created',
                            },
                          ],
                        }
                        await paymentExternal.gatewayCallback(
                          account,
                          orderGroup,
                          requestCallback
                          )

                        // 7- Cancel Order
                        await omsExternal.cancelOrder(data.orderId, data.sellerOrder)
                        // Cancel Marketplace
                        await omsExternal.cancelOrder(data.marketplaceOrderId, account)
                        // 8- Delete address
                        await masterData.deleteAddress(
                          addressId,
                          account
                        )

                      })
                    }
                  )
                }
              )
            }
          )
          responsePlaceOrder.error = { message: 'ORDEN CREADA CORRECTAMENTE' }
          return responsePlaceOrder
        } else {
          if (responsePlaceOrder?.error != null) {
            return responsePlaceOrder
          } else {
            const responsePlaceOrder: any = {}
            responsePlaceOrder.error = {}
            return responsePlaceOrder
          }
        }
      } catch (error) {
        const responsePlaceOrder: any = {}
        if (error?.response?.data?.orderForm?.messages != null) {
          error?.response?.data?.orderForm?.messages.forEach((element: any) => {
            responsePlaceOrder.error = {
              message: element?.text,
            }
          })
          responsePlaceOrder.error.totalizers = error?.response?.data?.orderForm?.totalizers
        } else {
          if (error?.response?.data?.error != null) {
            responsePlaceOrder.error = {
              message: error?.response?.data?.error?.message,
            }
          } else {
            responsePlaceOrder.error = {
              message: error?.response?.data,
            }
          }
        }
        return responsePlaceOrder
      }

      }else{
        return responseSetOrder
      }

    } else {
      const responsePlaceOrder: any = {}
      responsePlaceOrder.error = {
        message: 'ERROR No se encuentra el cliente',
      }
      return responsePlaceOrder
    }




    } catch (error) {
      console.log(error)

    }


}

