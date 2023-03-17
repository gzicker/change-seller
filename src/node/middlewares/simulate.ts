import type { SimulationOrderForm } from '../clients/typings/orderForm'
import type { CartSimulation } from '../typings/cart_simulation'

export async function simulateOrder(
  _: any,
  { data }: { data: CartSimulation },
  { clients: { checkoutExternal , market, decrypClient} }: Context
) {
  const items: Array<{ id: string; quantity: number; seller: string }> = []

  data.items.forEach((element) => items.push(values(element)))
  function values(element: any) {
    const item = {
      id: element.id,
      quantity: element.quantity,
      seller: data.seller,
    }

    return item
  }

  const list: Array<any> = []
  const listLogistics: Array<any> = []
  const index: string [] = []
  const geoCoordinates: string[] = []

  if (data.geoCoordinates != null) {
    const arrayDeCadenas = data.geoCoordinates.split(',')

    arrayDeCadenas.forEach((element) => {
      let a = element.replace('[', '')

      a = a.replace(']', '')
      geoCoordinates.push(a)
    })
  }

  const mket = await market.getMarket()
  let account = mket?.haveParentAccount ? mket?.parentAccountName : mket?.accountName ;


  const getEmail = async () => {
    const clientEmail = await decrypClient.decrypEmail(`?alias=${data?.clientProfileData?.email}`, account)
    const { email } = clientEmail ?? await decrypClient.decrypEmail(`?alias=${data?.clientProfileData?.email}`, data.sellerOrder)
    const _email =  await decrypClient.decrypEmail(`?alias=${email}`, account)
    const userEmail = _email?.email

    return userEmail ?? ''
  }

  const email = await getEmail()

  const request = {
    items,
    paymentData : {
      payments : [{
        paymentSystem : data.paymentData
    }]
    },
    postalCode: data.postalCode,
    geoCoordinates,
    country: data.country,
    clientProfileData: {...data?.clientProfileData, email}
  }

  const response: SimulationOrderForm = await checkoutExternal.simulation(request , account)

  let itemIndex = 0;
  response.items.forEach((element: any) => {
    if (element.availability == 'available') {
      element.itemIndex = itemIndex;
      itemIndex++;
      index.push(element.requestIndex)
      list.push(element)
    }
  })
  let itemIndexL = 0;
  response.logisticsInfo?.forEach((element: any) => {
    if (index.includes(element.itemIndex)) {
      element.itemIndex = itemIndexL;
      itemIndexL++;
      listLogistics.push(element)
    }
  })

  const rta = {
    items: await list,
    paymentData: (await response).paymentData,
    postalCode: (await response).postalCode,
    country: (await response).country,
    messages: (await response).messages,
    logisticsInfo: await listLogistics,
    purchaseConditions: (await response).purchaseConditions,
    totals: (await response).totals,
  }
  return rta
}
