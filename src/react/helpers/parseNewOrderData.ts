import { parseDateAndHour, parseRemovedItems } from "./parseData"

interface newOrderDataProps{
  data:any,
  items:any,
  sessionData:any,
  deliveryPolicy:string,
  localItems:any,
  simulation:any,
  targetSeller: string
}

const makeMessage = ({data, sessionData, localItems, simulationItems}:any) =>{
    const currentDate = new Date(Date.now()).toString()
    const transferenceDate = parseDateAndHour({date: currentDate})
    const createdDate = parseDateAndHour({date: data?.creationDate})
    const shippingDate = data?.shippingData?.logisticsInfo[0]?.shippingEstimateDate
    const shippingStimatedDate = parseDateAndHour({date:shippingDate})
    const observationsValue = data?.openTextField?.value
    const observations = !!observationsValue ? observationsValue : ' '
    const {itemsWithouthInventary} = parseRemovedItems({ modifiedItems:localItems, originItems:data?.items, simulationItems })

    const message =
      `
      PEDIDO PROCEDENTE DE UNA TRANSFERENCIA:
      -Transferido de ${data?.merchantName} por ${sessionData?.session?.namespaces?.authentication?.adminUserEmail?.value}
      -Creado: ${ createdDate }
      -Fecha estimada de envío en la orden anterior: ${shippingStimatedDate}
      -Fecha y hora de transferencia: ${transferenceDate}

      ${
        !!observations && observations!== ' '
        ?
        `OBSERVACIONES DEL PEDIDO
        -Nota: "${ observations }".`
        :
        ''
      }

      PRODUCTOS NO TRANSFERIDOS \n
      ${
        !!itemsWithouthInventary
        ?
        `-Productos sin inventario:
            * ${itemsWithouthInventary.join('\n')}`
        :
        ''
      }
    `

    return message
}

export const getDeliveryWindow = ( { logisticsInfo }:any ) => {
  if(!logisticsInfo || logisticsInfo.length < 1){
    throw new Error ('Logistics info is undefined, please check that')
  }
  const deliveryWindow = logisticsInfo.filter((info:any) => info?.slas?.length > 0)

  const data = {
    startDateUtc: deliveryWindow[0]?.slas[0]?.availableDeliveryWindows[0]?.startDateUtc,
    endDateUtc: deliveryWindow[0]?.slas[0]?.availableDeliveryWindows[0]?.endDateUtc
  }

  return data
}

export const setSellersData  = (items: any, globalSeller:string) => {
    return items.map((item:any) => {
      const itemWithSeller = {
        ...item,
        seller: globalSeller,
        attachments: item?.attachments ?? ''
      }
      return itemWithSeller
    })
}

export const getTotal = (items:any, logisticInfo: any) => {
    let total = 0;
    items.forEach((item:any, indx:number) => {
        const itemValue = item?.priceDefinition?.total;
        const logisticValue = logisticInfo[indx]?.slas[0]?.price;
        total += itemValue + logisticValue;
    })
    return total;
}

export const parseLogisticInfo = (logisticInfo: any) => {

    const slasName = logisticInfo[0].slas[0]?.name

    let logistics = logisticInfo.map((item:any) => {
        let formatedItem = {
            "itemIndex": item?.itemIndex,
            "selectedSla": "",
            "selectedDeliveryChannel": "",
            "quantity": item?.quantity,
            "price": 0,
            "shipsTo": item?.shipsTo,
            "deliveryWindow": "",
            "shippingEstimate": "",
            "deliveryChannels": item?.deliveryChannels,
        };

        if(item.slas.length > 0 && !item.selectedSla){
            const sla = item?.slas?.find((sla:any) => sla.name === slasName)
            const availableDelivery = {
              ...sla?.availableDeliveryWindows[0],
              listPrice: sla?.availableDeliveryWindows[0]?.listPrice ?? 0
            }
            formatedItem.selectedSla = sla?.name;
            formatedItem.shippingEstimate = sla?.shippingEstimate;
            formatedItem.deliveryWindow = availableDelivery;
            formatedItem.price = sla?.price ?? 0;
            formatedItem.selectedDeliveryChannel = sla?.deliveryChannel
        }

        return formatedItem;
    });
    return logistics;
}

export const parseNewOrderData = ({data, items, sessionData, deliveryPolicy, localItems, simulation} :newOrderDataProps) => {

  const logisticsInfo = simulation?.simulateOrder?.logisticsInfo

  const simulationItems = simulation?.simulateOrder?.items

  const messages = simulation?.simulateOrder?.messages
  const message = makeMessage({data, sessionData, messages, localItems, simulationItems})
  const globalSeller = simulation?.simulateOrder?.items[0]?.seller;


  const itemsWithSellers = setSellersData(items, globalSeller);
    const totalValue = getTotal(itemsWithSellers, logisticsInfo);
    const logisticInfo = parseLogisticInfo(logisticsInfo);


    const orderData = {
        itemsOrder: itemsWithSellers,
        orderId: data?.orderId,
        marketplaceOrderId:data?.marketplaceOrderId,
        sellerOrder: data?.merchantName?.toLowerCase(),
        email: data?.clientProfileData?.email,
        shippingData: {
            address:{
                addressId: data?.shippingData?.address?.addressId,
                geoCoordinates:deliveryPolicy,
            },
            logisticsInfoOrder: logisticInfo,
        },
        value: totalValue,
        paymentData:{
            payments:[
                {
                    paymentSystem: data?.paymentData?.transactions[0]?.payments[0]?.paymentSystem,
                    referenceValue: totalValue,
                    value: totalValue,
                    installments: data?.paymentData?.transactions[0]?.payments[0]?.installments
                }
            ]
        },
        coments: message
    }
  return orderData
}

export const valuesMessage = (totalizers:any) =>{
  const newShippingValue = totalizers?.find(({ id }:any) => id === 'Shipping').value / 100

  const newValuesMessage = `
    Los valores de envio fueron cambiados
    Nuevo costo de envío: $${newShippingValue}
    ¿Desea continuar?
  `

  const message = !!totalizers && totalizers.length ? newValuesMessage : null

  return message
}
