import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { getRequestConfigKey } from '../utils/request_keys'

const baseURLpub = '.vtexpayments.com.br/api/pub/transactions'
const baseURL = '.vtexpayments.com.br/api/pvt/transactions'

const routes = {
  createTransaction: (account: string, transactionId: string) =>
    `https://${account}${baseURLpub}/${transactionId}/payments`,
  authorizeOrder: (account: string, transactionId: string) =>
    `https://${account}${baseURL}/${transactionId}/authorization-request`,
  gatewayCallback: (account: string, orderGroup: string) =>
    `https://${account}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/${orderGroup}`,
}

export class Payment extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
    })
  }

  // eslint-disable-next-line max-params
  public async createTransaction(
    account: string,
    transactionId: string,
    transaction: any
  ) {
    try {
      const URI = routes.createTransaction(account, transactionId)
      const response = await this.http.post(URI, transaction, getRequestConfigKey(account) )

      return response
    } catch (error) {
      console.log('Error TX ..', error.response.data)
      return error
    }
  }

  // eslint-disable-next-line max-params
  public async authorizationTransaction(
    account: string,
    transactionId: string,
    authorization: any
  ) {
    try {
      const URI = routes.authorizeOrder(account, transactionId)
      const response = await this.http.post(URI, authorization, getRequestConfigKey(account))
      return response
    } catch (error) {
      console.log('ERROR AUTH ..', error.response.data)

      return null
    }
  }

  // eslint-disable-next-line max-params
  public async gatewayCallback(account: string, orderGroup: string, data: any) {
    try {
      const URI = routes.gatewayCallback(account, orderGroup)
      const response = await this.http.post(URI, data, {
        params: {
          an: account,
        },
      })

      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
