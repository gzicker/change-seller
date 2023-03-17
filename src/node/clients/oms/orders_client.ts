import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

import type { GetOrders } from '../../typings/orders'
import { AmbientePpal } from '../../utils/constants'

export class OrdersClient extends JanusClient {
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
   * GetOrdersList
   */
  public async getOrdersList(data: GetOrders) {
    return this.getOrders(data.email, data.per_page, data.page)
  }

  /**
   * getMarket
   */
  public async getMket() {
    try {
      const URI = this.routes.getMket()
      const response = await this.http.get(URI)
      return response?.parentAccountName == null
        ? { account: response?.accountName, seller: false }
        : { account: response?.parentAccountName, seller: true }
    } catch (error) {
      return { account: AmbientePpal, seller: false }
    }
  }

  /*
   * getOrders
   */
  public async getOrders(email: string, per_page: number, page: number) {
    try {
      const responsemket = await this.getMket()
      const URI = this.routes.getOrders()
      let response
      if (responsemket.seller == true) {
        response = await this.http.get(URI, {
          params: {
            q: email,
            per_page: per_page,
            page: page,
            an: responsemket.account,
            f_sellerNames: this.context.account,
          },
        })
      } else {
        response = await this.http.get(URI, {
          params: {
            q: email,
            per_page: per_page,
            page: page,
            an: responsemket.account,
          },
        })
      }

      return response
    } catch (error) {
      return null
    }
  }

  private get routes() {
    return {
      getOrders: () =>
        `/api/oms/pvt/orders/`,
      getMket: () =>
        `/api/vlm/account`,
    }
  }
}
