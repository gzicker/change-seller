import {
  ExternalClient,
  InstanceOptions,
  IOContext,
} from '@vtex/api'
import { getRequestConfigKey } from '../utils/request_keys'

//import { getRequestConfigKey } from '../utils/request_keys'


const baseURL = '/api/oms/pvt/orders/'

const routes = {
  cancelOrder: (orderId: String , sellerId: String) => `https://${sellerId}.vtexcommercestable.com.br${baseURL}${orderId}/cancel`,
}

export class OmsExternal extends ExternalClient {
  constructor(ctx: IOContext,  options?: InstanceOptions) {
    super('' , ctx , options)

  }

  public async cancelOrder(
    orderId: String,
    sellerId: String
  ) {
    try {
      const URI = routes.cancelOrder(orderId , sellerId)
      const response: any = await this.http.post(URI, null ,getRequestConfigKey(sellerId))

      if (response?.receipt == null) {
        const URI = routes.cancelOrder(orderId , sellerId)

        await this.http.post(URI,null , getRequestConfigKey(sellerId))
      }
      return response
    } catch (error) {
      console.log('Error CANCEL ORDER ..', error.response)

      return error
    }
  }}
