import { Items } from '../typings/items'
import { Orders } from '../typings/orders'

interface Message{
    text:string
}

interface MessagesProps{
    messages:Message[]
    optionalMessage?:string
}

interface Date{
    date:string
}

interface Price{
    price: number
}

interface OrderSimulation{
  items: Items
  order: Orders
  sellerId: string
  deliveryPolicy: string
}

export const parseMessages = ({ messages, optionalMessage }:MessagesProps) => {
    const parsedMessages = !!messages && messages.length > 0 ? messages : [{text: optionalMessage}]
    return parsedMessages
}

export const parseDateAndHour = ({ date }: Date) =>{
    const newDate = new Date(date)
    const [ month, day, year ] = newDate?.toLocaleDateString()?.split('/')
    const formattedHour = newDate.toLocaleTimeString()
    const parsedDateAndHour = !!date && !!newDate ? `${day}/${month}/${year} - ${formattedHour}` : ''
    return parsedDateAndHour
}

export const parsePrice = ({price}:Price) => {
    if(!price || isNaN(price)) return 0
    const parsedPrice = `$ ${price / 100}`
    return parsedPrice
}

export const parseRemovedItems = ({modifiedItems, originItems, simulationItems}:any) => {
    const removedItems = Object.values(modifiedItems).filter((item:any) => item?.quantity < 1)
    const removedItemsId = removedItems.map((item:any) => item?.id)
    const removedItemsNames = originItems?.filter((item:any) => removedItemsId.includes(item?.id)).map((item:any) => item?.name)
    const idItemsToTranspher = simulationItems.map((simulatedItem:any) => simulatedItem.id)
    const itemsWithouthInventary = originItems?.filter((item:any) => !idItemsToTranspher.includes(item?.id)).map((item:any) => item?.name).filter((itemName:string) => !removedItemsNames.includes(itemName))
    return {removedItemsNames, itemsWithouthInventary}
}

export const simulationData = ( { items, order, sellerId, deliveryPolicy }:OrderSimulation ) =>{

  const {
    storePreferencesData,
    clientProfileData,
    merchantName,
    paymentData:{
      transactions:paymentData
    }
  } = order

  const _items = Object.values(items).filter((i:any) => i?.quantity > 0)
  const countryCode = storePreferencesData?.countryCode
  const [ transactions ] = paymentData
  const { payments } = transactions
  const [ paymentMethod ] = payments

  return{
    items: _items,
    country:countryCode,
    seller: sellerId,
    geoCoordinates:deliveryPolicy,
    paymentData: paymentMethod?.paymentSystem,
    clientProfileData: {
      email: clientProfileData?.email
    },
    sellerOrder: merchantName?.toLowerCase()
  }

}
