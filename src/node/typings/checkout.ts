export interface ChangeOrder {
  itemsOrder: [ItemsOrder]
  email: string
  shippingData: ShippingData
  paymentData: [PaymentData]
  orderId: string
  marketplaceOrderId: string
  sellerOrder: string
  coments: string
}

export interface ShippingData {
  address: Address
  logisticsInfo: LogisticsInfo
}

export interface Address {
  addressId: String
  geoCoordinates: string
}

export interface LogisticsInfo {
  itemIndex: number
  selectedSla: string
  selectedDeliveryChannel: string
  quantity: number
  price: number
  shipsTo: [ string ]
  shippingEstimate: string
  deliveryWindow: DeliveryWindow
  deliveryChannels: DeliveryChannels
}

export interface DeliveryWindow {
  startDateUtc: string
  endDateUtc: string
  price: number
  lisPrice: number
  tax: number
}

export interface DeliveryChannels {
  id: string
}

export interface ItemsOrder {
  id: string
  quantity: number
  seller: string
  sellerChain: [String]
  price: number
  attachments: [any]
  requestIndex: number
  tax: number
  priceValidUntil: string
  listPrice: number
  rewardValue: number
  sellingPrice: number
  priceTags: [PriceTags]
  availability: String
  priceDefinition: PriceDefinition
}

export interface PriceTags {
  value: number
  name: string
  rawValue: number
}

export interface PriceDefinition {
  calculatedSellingPrice: number
  total: number
  sellingPrices: [SellingPrices]
}

export interface SellingPrices {
  value: number
  quantity: number
}

export interface Payments {
  paymentSystem: string
  referenceValue: number
  value: number
  installments: number
}
