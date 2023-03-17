export interface CartSimulation {
  items: [Items]
  seller: string
  postalCode:  string
  geoCoordinates: string
  country: string
  paymentData: PaymentData
  clientProfileData: ClientData
  sellerOrder:string
}

export interface ClientData{
  email: 'string'
}

export interface PaymentData {
  payments: [Payments]
}

export interface Items {
  id: string
  quantity: number
  seller: string
  attachments: string
}

export interface ResponseCartSimulation {
  items: [ItemsResponse]
  paymentData: PaymentData
  postalCode: string
  country: string
  messages: [Messages]
  logisticsInfo: [LogisticsInfo]
  purchaseConditions: PurchaseConditions
  totals: [Totals]
}

export interface ItemsResponse {
  id: string
  quantity: number
  seller: string
  price: number
  name: string
  ean: string
}

export interface PurchaseConditions {
  itemPurchaseConditions: [ItemPurchaseConditions]

}

export interface ItemPurchaseConditions {
  id: string
  seller: string
  sellerChain: [string]
  slas: [Slas]
  price: number
  listPrice: number

}

export interface Slas {
  id: string
  deliveryChannel: string
  name: String
  deliveryIds: [DeliveryIds]
  shippingEstimate: string
  price: number
  listPrice: number
  transitTime: string
}

export interface DeliveryIds {
  courierId: string
  warehouseId: string
  dockId: string
  courierName: string
  quantity: number
}

export interface Totals {
  id: string
  name: string
  value: number
}
