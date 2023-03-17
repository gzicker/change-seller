import { IOClients } from '@vtex/api'
import { CartSimulationClient } from './cart_simulation/cart_simulation'
import { CheckoutClient } from './change_order/change_order'
import { OMS } from './oms/oms'
import { OrdersClient } from './oms/orders_client'
import { GetMarketClient } from './oms/market'
import { OmsExternal } from './oms/oms_external'
import { VBaseClient } from './vbase'
import { Catalog } from './catalog/catalog'
import { CatalogExternal } from './catalog/catalog_external'
import { Checkout } from './checkout/checkout'
import { CheckoutExternal} from './checkout/checkout_external'
import { DecrypClient } from './user/decryp'
import { MasterDataClient } from './master_data/master_data'
import { Payment } from './payment/payment'
import { PaymentExternal } from './payment/payment_external'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  public get omsExternal() {
    return this.getOrSet('omsExternal',OmsExternal)
  }

  public get orders() {
    return this.getOrSet('orders', OrdersClient)
  }

  public get paymentClient() {
    return this.getOrSet('paymentClient',Payment)
  }

  public get paymentExternal() {
    return this.getOrSet('paymentExternal',PaymentExternal)
  }

  public get checkoutLatest() {
    return this.getOrSet('checkout', CheckoutClient)
  }

  public get checkoutExternal() {
    return this.getOrSet('checkoutExternal', CheckoutExternal)
  }

  public get cartSimulationClient() {
    return this.getOrSet('cartSimulationClient', CartSimulationClient)
  }

  public get catalogClient() {
    return this.getOrSet('catalog', Catalog)
  }

  public get catalogExternalClient() {
    return this.getOrSet('catalogExternal', CatalogExternal)
  }

  public get decrypClient() {
    return this.getOrSet('decryp', DecrypClient)
  }

  public get masterData() {
    return this.getOrSet('masterData', MasterDataClient)
  }

  public get checkout() {
    return this.getOrSet('checkout', Checkout)
  }

  public get market() {
    return this.getOrSet('market', GetMarketClient)
  }

  public get vBase() {
    return this.getOrSet('vbase', VBaseClient)
  }

}
