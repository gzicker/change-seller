import { IOContext, MetricsAccumulator, SegmentData } from '@vtex/api'

if (!global.metrics) {
  console.error('No global.metrics at require time')
  global.metrics = new MetricsAccumulator()
}

declare global {
  interface CustomIOContext extends IOContext {
    currentProfile: CurrentProfile
    segment?: SegmentData
    orderFormId?: string
  }

  interface UserAddress {
    id: string
    addressName: string
  }

  interface UserProfile {
    id: string
  }

  interface CurrentProfile {
    client_id: string
  }

  interface Item {
    thumb: string
    name: string
    href: string
    criteria: string
    slug: string
  }

  interface PersonalPreferences {
    isNewsletterOptIn?: 'True' | 'False'
  }

  interface ProfileCustomField {
    key: string
    value: string
  }

  interface ResponseClient {
    userProfileId: string
    userProfile: UserProfile
  }

  interface UserProfile {
    email: string
    firstName: string
    lastName: string
  }

  interface RequestPlaceOrder {
    items: [Items]
    clientProfileData: ClientProfileData
    shippingData: ShippingData
    paymentData: [PaymentData]
    openTextField: string
  }

  interface PaymentData {
    installmentOptions: [InstallmentOptions]
    paymentSystems: [PaymentSystems]
  }

  interface InstallmentOptions {
    paymentSystem: string
    paymentName: string
    paymentGroupName: string
    value: number
    installments: [Installments]
  }

  interface Installments {
    count: number
    hasInterestRate: Boolean
    value: number
    total: number
    sellerMerchantInstallments: [SellerMerchantInstallments]
  }

  interface SellerMerchantInstallments {
    id: string
    count: number
    hasInterestRate: Boolean
    interestRate: number
    value: number
    total: number
  }

  interface PaymentSystems {
    installmentOptions: [InstallmentOptions]
    paymentSystems: [PaymentSystems]
  }

  interface Items {
    id: string
    quantity: number
    seller: string
    price: number
  }

  interface ClientProfileData {
    email: string
  }

  interface ShippingData {
    address: Address
    logisticsInfo: any
  }

  interface Address {}

  interface Sku {
    id: string
    nameComplete: string
    alternateIds: [AlternateIds]
  }

  interface AlternateIds {
    ean: string
    refId: string
  }

  interface LogisticsInfo {
    itemIndex: number
    selectedSla: string
    price: number
  }

  interface Payments {
    paymentSystem: string
    referenceValue: number
    value: number
    installments: number
  }

  interface ResponsePlaceOrder {
    orderForm: OrderForm
    transactionData: TransactionData
    orders: [Orders]
    error: Error
  }

  interface OrderForm {
    orderFormId: string
    messages: [Messages]
  }

  interface Messages {
    text: string
    status: string
  }

  interface TransactionData {
    merchantTransactions: [MerchantTransactions]
    receiverUri: string
    gatewayCallbackTemplatePath: string
  }

  interface MerchantTransactions {
    id: string
    transactionId: string
    merchantName: string
    payments: [Payments]
  }

  interface Payments {
    paymentSystem: string
    value: number
  }

  interface Orders {
    orderId: string
    orderGroup: string
    sellerOrderId: string
  }

  interface RequestCreateTransaction {
    paymentSystem: String
    installments: String
    value: number
    referenceValue: number
    fields: Fields
    transaction: Transaction
    currencyCode: string
  }

  interface Fields {
    addressId: string
  }

  interface Transaction {
    id: string
    merchantName: string
  }

  interface ResponseTransaction {
    id: string
    transactionId: string
    referenceKey: string
    status: string
    value: number
  }

  export interface ResponseChangeOrder {
    error: Error
  }

  export interface Error {
    message: string
  }
}
