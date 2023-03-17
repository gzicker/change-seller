export async function listPayments(
  _: any,
  _data: any,
  { clients: { masterData, market } }: Context
) {
  const mkt = await market.getMarket()
  const account = mkt.haveParentAccount
    ? mkt.parentAccountName
    : mkt.accountName

  const response = await masterData.getDocuments(account)

  return response
}
