

import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'
import { getRequestConfigKey } from '../utils/request_keys'

export class MasterDataClient extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super('' , ctx , options)
  }

  public async getDocuments( account: String  ) {
    try {
      const URI = this.routes.payment (account)
      const response = await this.http.get(URI,getRequestConfigKey(account) )
      return response
    } catch (error) {
      return null
    }
  }


  public async deleteAddress(addressId: string, sellerId: string) {
    try {
      const URIsearch = this.routes.searchAddress(sellerId , addressId)
      const search: any = await this.http.get(URIsearch, getRequestConfigKey(sellerId) )
      if (search?.[0]?.id) {
        const URI = this.routes.deleteAddress(search?.[0]?.id, sellerId)
        await this.http.delete(URI, getRequestConfigKey(sellerId))
      } else {
        console.log('NO EXISTE LA DIRECCIÓN')
      }
    } catch (error) {
      console.log('Error DELETE ..', error?.response?.data)
    }
  }


  private get routes() {
    const baseURL = '.vtexcommercestable.com.br/api/dataentities'

    return {
      payment: (sellerId: String) =>
        `https://${sellerId}${baseURL}/PA/search?_fields=_all`,
      searchAddress: (sellerId: string , addressName: string) =>
        `https://${sellerId}${baseURL}/AD/search?_fields=_all&addressName=${addressName}`,
      deleteAddress: (addressId: string, sellerId: string) =>
        `https://${sellerId}${baseURL}/AD/documents/${addressId}`,
    }
  }
}
