export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  IOSanitizedString: any;
  IOUpload: any;
  Upload: any;
};

export type AvailableDeliveryWindows = {
  __typename?: 'AvailableDeliveryWindows';
  startDateUtc?: Maybe<Scalars['String']>;
  endDateUtc?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type CartSimulation = {
  __typename?: 'CartSimulation';
  items?: Maybe<Array<Maybe<Items>>>;
  paymentData?: Maybe<PaymentData>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Messages>>>;
  logisticsInfo?: Maybe<Array<Maybe<LogisticsInfo>>>;
  purchaseConditions?: Maybe<PurchaseConditions>;
  totals?: Maybe<Array<Maybe<Totals>>>;
  clientProfileData?: Maybe<ClientData>;
  sellerOrder?: Maybe<Scalars['String']>;
};

export type ChangeOrder = {
  __typename?: 'ChangeOrder';
  orderForm?: Maybe<OrderForm>;
  transactionData?: Maybe<TransactionData>;
  orders?: Maybe<Array<Maybe<Orders>>>;
  error?: Maybe<Error>;
};

export type ClientData = {
  __typename?: 'ClientData';
  email?: Maybe<Scalars['String']>;
};

export type DeliveryIds = {
  __typename?: 'DeliveryIds';
  courierId?: Maybe<Scalars['String']>;
  warehouseId?: Maybe<Scalars['String']>;
  dockId?: Maybe<Scalars['String']>;
  courierName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Documents = {
  __typename?: 'Documents';
  isAllowed?: Maybe<Scalars['Boolean']>;
  paymentSystemName?: Maybe<Scalars['String']>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  totalizers?: Maybe<Array<Maybe<Totalizers>>>;
};

export type Fields = {
  __typename?: 'Fields';
  id?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IAddress = {
  addressId?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<Scalars['String']>;
};

export type ICartSimulation = {
  items?: Maybe<Array<Maybe<IItems>>>;
  seller?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  paymentData?: Maybe<Scalars['String']>;
  clientProfileData?: Maybe<IClientData>;
  sellerOrder?: Maybe<Scalars['String']>;
};

export type IChangeOrder = {
  itemsOrder: Array<Maybe<IItemsOrder>>;
  email: Scalars['String'];
  shippingData: IShippingData;
  paymentData: IPaymentData;
  coments?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  marketplaceOrderId: Scalars['String'];
  sellerOrder: Scalars['String'];
  value: Scalars['Float'];
};

export type IClientData = {
  email?: Maybe<Scalars['String']>;
};

export type IDeliveryWindow = {
  startDateUtc?: Maybe<Scalars['String']>;
  endDateUtc?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type IItems = {
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  attachments?: Maybe<Scalars['String']>;
};

export type IItemsOrder = {
  id?: Maybe<Scalars['String']>;
  requestIndex?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  seller?: Maybe<Scalars['String']>;
  sellerChain?: Maybe<Array<Maybe<Scalars['String']>>>;
  tax?: Maybe<Scalars['Float']>;
  priceValidUntil?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  rewardValue?: Maybe<Scalars['Float']>;
  sellingPrice?: Maybe<Scalars['Float']>;
  priceTags?: Maybe<Array<Maybe<IPriceTags>>>;
  attachments?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  priceDefinition?: Maybe<IPriceDefinition>;
};

export type IListOrders = {
  email?: Maybe<Scalars['String']>;
  per_page?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
};

export type ILogisticsInfoOrder = {
  itemIndex?: Maybe<Scalars['Int']>;
  selectedSla?: Maybe<Scalars['String']>;
  selectedDeliveryChannel?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  shipsTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  shippingEstimate?: Maybe<Scalars['String']>;
  deliveryWindow?: Maybe<IDeliveryWindow>;
};

export type InstallmentOptions = {
  __typename?: 'InstallmentOptions';
  paymentSystem?: Maybe<Scalars['String']>;
  paymentName?: Maybe<Scalars['String']>;
  paymentGroupName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  installments?: Maybe<Array<Maybe<Installments>>>;
};

export type Installments = {
  __typename?: 'Installments';
  count?: Maybe<Scalars['Int']>;
  hasInterestRate?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  sellerMerchantInstallments?: Maybe<Array<Maybe<SellerMerchantInstallments>>>;
};



export type IPaymentData = {
  payments?: Maybe<Array<Maybe<IPayments>>>;
};

export type IPayments = {
  paymentSystem?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  installments?: Maybe<Scalars['Int']>;
};

export type IPriceDefinition = {
  calculatedSellingPrice?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  sellingPrices?: Maybe<Array<Maybe<ISellingPrices>>>;
};

export type IPriceTags = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  rawValue?: Maybe<Scalars['Float']>;
};

export type ISellingPrices = {
  value?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IShippingData = {
  address?: Maybe<IAddress>;
  logisticsInfoOrder?: Maybe<Array<Maybe<ILogisticsInfoOrder>>>;
};

export type ItemPurchaseConditions = {
  __typename?: 'ItemPurchaseConditions';
  id?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['String']>;
  sellerChain?: Maybe<Array<Maybe<Scalars['String']>>>;
  slas?: Maybe<Array<Maybe<Slas>>>;
  price?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
};

export type Items = {
  __typename?: 'Items';
  id?: Maybe<Scalars['String']>;
  requestIndex?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  seller?: Maybe<Scalars['String']>;
  sellerChain?: Maybe<Array<Maybe<Scalars['String']>>>;
  tax?: Maybe<Scalars['Float']>;
  priceValidUntil?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  listPrice?: Maybe<Scalars['Float']>;
  rewardValue?: Maybe<Scalars['Float']>;
  sellingPrice?: Maybe<Scalars['Float']>;
  priceTags?: Maybe<Array<Maybe<PriceTags>>>;
  attachments?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  priceDefinition?: Maybe<PriceDefinition>;
};

export type List = {
  __typename?: 'List';
  orderId?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['String']>;
  clientName?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['Float']>;
  paymentNames?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDescription?: Maybe<Scalars['String']>;
  marketPlaceOrderId?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  salesChannel?: Maybe<Scalars['String']>;
  affiliateId?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  lastMessageUnread?: Maybe<Scalars['String']>;
  ShippingEstimatedDate?: Maybe<Scalars['String']>;
  orderIsComplete?: Maybe<Scalars['Boolean']>;
  authorizedDate?: Maybe<Scalars['String']>;
  callCenterOperatorName?: Maybe<Scalars['String']>;
  totalItems?: Maybe<Scalars['Float']>;
  currencyCode?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  orderFormId?: Maybe<Scalars['String']>;
};

export type ListOrders = {
  __typename?: 'ListOrders';
  list?: Maybe<Array<Maybe<List>>>;
  paging?: Maybe<Paging>;
};

export type LogisticsInfo = {
  __typename?: 'LogisticsInfo';
  itemIndex?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  slas?: Maybe<Array<Maybe<Slas>>>;
  shipsTo?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MerchantTransactions = {
  __typename?: 'MerchantTransactions';
  id?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  merchantName?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Maybe<Payments>>>;
};

export type Messages = {
  __typename?: 'Messages';
  text?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  fields?: Maybe<Fields>;
};

export type Mutation = {
  __typename?: 'Mutation';
  simulateOrder?: Maybe<CartSimulation>;
  simulateOrderLatest?: Maybe<CartSimulation>;
  changeOrder?: Maybe<ChangeOrder>;
  changeOrderLatest?: Maybe<ChangeOrder>;
};


export type MutationSimulateOrderArgs = {
  data?: Maybe<ICartSimulation>;
};


export type MutationSimulateOrderLatestArgs = {
  data?: Maybe<ICartSimulation>;
};


export type MutationChangeOrderArgs = {
  data?: Maybe<IChangeOrder>;
};


export type MutationChangeOrderLatestArgs = {
  data?: Maybe<IChangeOrder>;
};

export type OrderForm = {
  __typename?: 'OrderForm';
  orderFormId?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Messages>>>;
  orders?: Maybe<Array<Maybe<Orders>>>;
};

export type Orders = {
  __typename?: 'Orders';
  orderId?: Maybe<Scalars['String']>;
  orderGroup?: Maybe<Scalars['String']>;
  sellerOrderId?: Maybe<Scalars['String']>;
};

export type Paging = {
  __typename?: 'Paging';
  total?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type PaymentData = {
  __typename?: 'PaymentData';
  installmentOptions?: Maybe<Array<Maybe<InstallmentOptions>>>;
  paymentSystems?: Maybe<Array<Maybe<PaymentSystems>>>;
};

export type Payments = {
  __typename?: 'Payments';
  paymentSystem?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type PaymentSystems = {
  __typename?: 'PaymentSystems';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  stringId?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  requiresDocument?: Maybe<Scalars['Boolean']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  requiresAuthentication?: Maybe<Scalars['Boolean']>;
};

export type PriceDefinition = {
  __typename?: 'PriceDefinition';
  calculatedSellingPrice?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  sellingPrices?: Maybe<Array<Maybe<SellingPrices>>>;
};

export type PriceTags = {
  __typename?: 'PriceTags';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  rawValue?: Maybe<Scalars['Float']>;
};

export type PurchaseConditions = {
  __typename?: 'PurchaseConditions';
  itemPurchaseConditions?: Maybe<Array<Maybe<ItemPurchaseConditions>>>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  listOrders?: Maybe<ListOrders>;
  listPayments?: Maybe<Array<Maybe<Documents>>>;
};


export type QueryListOrdersArgs = {
  data?: Maybe<IListOrders>;
};

export type SellerMerchantInstallments = {
  __typename?: 'SellerMerchantInstallments';
  id?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  hasInterestRate?: Maybe<Scalars['Boolean']>;
  interestRate?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type SellingPrices = {
  __typename?: 'SellingPrices';
  value?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Slas = {
  __typename?: 'Slas';
  id?: Maybe<Scalars['String']>;
  deliveryChannel?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  deliveryIds?: Maybe<Array<Maybe<DeliveryIds>>>;
  shippingEstimate?: Maybe<Scalars['String']>;
  listPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  transitTime?: Maybe<Scalars['String']>;
  availableDeliveryWindows?: Maybe<Array<Maybe<AvailableDeliveryWindows>>>;
};

export type Totalizers = {
  __typename?: 'Totalizers';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type Totals = {
  __typename?: 'Totals';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TransactionData = {
  __typename?: 'TransactionData';
  merchantTransactions?: Maybe<Array<Maybe<MerchantTransactions>>>;
  receiverUri?: Maybe<Scalars['String']>;
  gatewayCallbackTemplatePath?: Maybe<Scalars['String']>;
};


export {}