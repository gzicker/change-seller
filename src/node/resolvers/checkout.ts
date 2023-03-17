import type { ChangeOrder } from '../typings/checkout'

export const changeOrderLatest = (
  _: any,
  { data }: { data: ChangeOrder },
  { clients: { checkoutLatest: checkoutClient } }: Context
) => checkoutClient.changeOrder(data)
