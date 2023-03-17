import {
  ExternalClient,
  InstanceOptions,
  IOContext,
} from '@vtex/api'
import { SimulationPayload } from '../typings/checkout'
import { SimulationOrderForm } from '../typings/orderForm'

import { getRequestConfigKey } from '../utils/request_keys'


const baseURL = '/api/checkout'

const routes = {
  orders:( market: string) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/orders`,
  clientProfile: (email: string , market: string) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/profiles?email=${email}`,
  simulation: (market: string) => `https://${market}.vtexcommercestable.com.br${baseURL}/pub/orderForms/simulation`,
}

export class CheckoutExternal extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(  ``,
    ctx,
    {
      ...(options ?? {}),
      headers: {
        ...(options?.headers ?? {}),
        'X-Vtex-Use-Https': 'true',
      },
    })
  }

  public async clientProfile(
    email: string,
    market:string
  ) {
    try {

      const URI = routes.clientProfile(email, market)
      const response: any = await this.http.get(URI , getRequestConfigKey(market))
      return response
    } catch (error) {
      return error
    }
  }

  public async setNewOrder(
    order: any,
    market:string
  ) {
    try {

      const URI =  routes.orders(market)
      const response: any = await this.http.put(URI ,order, getRequestConfigKey(market))
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
  }

  public simulation(
    simulation: SimulationPayload,
    mkt: string
  ) {
    return this.http.post<SimulationOrderForm>(
      routes.simulation(mkt),
      simulation,
      getRequestConfigKey(mkt))
  }


}
