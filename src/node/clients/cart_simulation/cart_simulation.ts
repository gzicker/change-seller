import type {
  InstanceOptions,
  IOContext,
  RequestConfig,
} from '@vtex/api'
import { JanusClient } from '@vtex/api'


import { statusToError } from '../../utils'
import { AmbientePpal } from '../../utils/constants'
import type { CartSimulation, Items } from '../../typings/cart_simulation'

export class CartSimulationClient extends JanusClient {
  public constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...(options && options.headers),
        ...(ctx.adminUserAuthToken
          ? {
              VtexIdclientAutCookie: ctx.adminUserAuthToken,
              'Proxy-Authorization': ctx.adminUserAuthToken,
            }
          : {
              VtexIdclientAutCookie: ctx.authToken,
              'Proxy-Authorization': ctx.authToken,
            }),
        'x-vtex-user-agent': ctx.userAgent,
        'X-VTEX-Use-Https': 'true',
      },
    })
  }




  /**
   * getSKU
   */
  public async getSKU(id: string) {
    const response = this.http.get(this.routes.getSKU(id))
    return response
  }

  /**
   * simulateOrder
   */
  public async simulateOrder(data: CartSimulation) {
    const items: { id: string; quantity: number; seller: string }[] = []
    data.items.forEach((element) => items.push(values(element)))
    function values(element: Items) {
      var item = {
        id: element.id,
        quantity: element.quantity,
        seller: data.seller,
      }
      return item
    }

    const geoCoordinates: string[] = []
    if (data.geoCoordinates != null) {
      var arrayDeCadenas = data.geoCoordinates.split(',')

      arrayDeCadenas.forEach((element) => {
        let a = element.replace('[' , '')
        a= a.replace(']', '')
        geoCoordinates.push(a)
      })
    }
    const request = {
      items: items,
      postalCode: data.postalCode,
      geoCoordinates: geoCoordinates,
      country: data.country,
    }

    const mket: any = await this.getMket()
    const URI = this.routes.simulator(mket)
    const response: any = this.http.post(URI, request, {
      params: { an: AmbientePpal },
    })
    const list: {
      id: string
      quantity: number
      seller: string
      price: number
      ean: string
      name: string
      priceTags: any
    }[] = []

    ;(await response).items.forEach((element: any) => {
      const sku: any = this.getSKU(element.id)
      if (element.availability == 'available') {
        let sellingPrice: number = 0
        if (element?.sellingPrice == null) {
          sellingPrice = element?.price
        } else {
          sellingPrice = element?.sellingPrice
        }

        let attachments: any = '[]'
        data.items.forEach((element2) => {
          if (element2.id == element.id) {
            attachments = element2.attachments
          }
        })

        var item = {
          id: element.id,
          quantity: element.quantity,
          price: element?.price,
          sellingPrice: sellingPrice,
          seller: data.seller,
          name: sku.then((val: { NameComplete: any }) => val.NameComplete),
          ean: sku.then((val: { AlternateIds: any }) => val.AlternateIds.Ean),
          priceTags: element.priceTags,
          attachments: attachments,
        }
        list.push(item)
      }
    })

    const rta = {
      items: list,
      paymentData: (await response).paymentData,
      postalCode: (await response).postalCode,
      country: (await response).country,
      messages: (await response).messages,
      logisticsInfo: (await response).logisticsInfo,
      purchaseConditions: (await response).purchaseConditions,
      totals: (await response).totals,
    }
    return rta
  }

  protected get = <T>(url: string, config: RequestConfig = {}) => {
    return this.http.get<T>(url, config).catch(statusToError) as Promise<T>
  }

  protected post = <T>(url: string, data?: any, config: RequestConfig = {}) => {
    return this.http
      .post<T>(url, data, config)
      .catch(statusToError) as Promise<T>
  }


  /**
   * getClientProfile
   */
   public async getMket() {
    try {
      const URI = this.routes.getMket()
      const response: any = await this.get(URI)
      if(response?.haveParentAccount){
        return response?.parentAccountName

      }else{
        return response?.accountName

      }
    } catch (error) {
      console.info(error)
      return AmbientePpal
    }
  }

  private get routes() {
    const base =
      '.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation'
    const baseSku = '/api/catalog_system/pvt/sku/'
    const getMket = '/api/vlm/account'


    return {
      simulator: (mket: string) => `https://${mket}${base}`,
      getSKU: (sku: string) => `${baseSku}stockkeepingunitbyid/${sku}`,
      getMket: () =>
      `https://${this.context.account}.vtexcommercestable.com.br${getMket}`,

    }
  }
}
