import {
  ExternalClient,
  InstanceOptions,
  IOContext,
} from '@vtex/api'

import { getRequestConfigKey } from '../utils/request_keys'


const baseURL = '.vtexcommercestable.com.br/api/catalog_system'

const routes = {

  getSkuById: (skuId: String , market: String) => `https://${market}${baseURL}/pvt/sku/stockkeepingunitbyid/${skuId}`,
 }

export class CatalogExternal extends ExternalClient {
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

  public async getSkuById(
    skuId: String,
    market: String
  ) {
    try {

      const URI = routes.getSkuById(skuId , market)
      const response: any = await this.http.get(URI , getRequestConfigKey(market))
      return response
    } catch (error) {
      return error
    }
  }}
