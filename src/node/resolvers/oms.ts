import type { GetOrders } from '../typings/orders'

export const listOrders = (
  _: any,
  { data }: { data: GetOrders },
  { clients: { orders: ordersClient } }: Context
) => ordersClient.getOrdersList(data)
