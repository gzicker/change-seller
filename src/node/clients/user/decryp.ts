import type {
  InstanceOptions,
  IOContext,
} from '@vtex/api'
import { JanusClient } from '@vtex/api'

import { getRequestConfigKey } from '../utils/request_keys'


const baseURL = 'https://conversationtracker.vtex.com.br/api/pvt'


const routes = {
  decrypEmail: (queryString: String, market: String) => `${baseURL}/emailMapping${queryString}&an=${market}`,

}
export class DecrypClient extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }


  public async decrypEmail(
    queryString : String ,
    account : String
  ) : Promise<any | undefined>  {
    return this.http.get<any>(
      routes.decrypEmail(queryString, account),
      getRequestConfigKey(account))
  }
}
