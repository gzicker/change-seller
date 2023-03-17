import type {
  InstanceOptions,
  IOContext,
  RequestTracingConfig,
} from '@vtex/api'
import { JanusClient } from '@vtex/api'

import type { AuthMethod } from '../typings/tokens'
import { getRequestConfig } from '../utils/request'

const baseURL = 'api/vlm/account'

const routes = {
  getMket: () => `${baseURL}`,
}

export class GetMarketClient extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }

  public async getMarket(
    authMethod: AuthMethod = 'ADMIN_TOKEN',
    tracingConfig?: RequestTracingConfig
  ): Promise<any | undefined> {
    const metric = ''

    try {
      const response = await this.http.get(
        routes.getMket(),
        getRequestConfig(this.context, authMethod, metric, tracingConfig)
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
