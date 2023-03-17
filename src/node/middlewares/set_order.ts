export async function setOrder(
  data : any ,
  responseClient : any ,
  ) {
    try {
    /**
    *   setOrder paso 3- CREATE ORDER
    */
    let address: any
    let existaddress: boolean = false
    responseClient?.availableAddresses.forEach((element: any) => {
      if (element?.addressId == data.shippingData.address.addressId) {
        address = {
          addressType: element.addressType,
          receiverName: element.receiverName,
          postalCode: element.postalCode,
          city: element.city,
          state: element.state,
          country: element.country,
          street: element.street,
          number: element.number,
          neighborhood: element.neighborhood,
          complement: element.complement,
          geoCoordinates: JSON.parse(
            data?.shippingData?.address?.geoCoordinates
          ),
        }
        existaddress = true
      }
    })
    if (existaddress) {
      const req = {
        value: data.value,
        allowManualPrice: true,
        clientProfileData: responseClient?.userProfile,
        items: data.itemsOrder,
        shippingData: {
          address,
          logisticsInfo: data.shippingData.logisticsInfoOrder,
        },
        paymentData: data.paymentData,
        openTextField: { value: data.coments },
        marketingData: {
          id: 'marketingData',
          marketingTags: [
            'ChangeSeller',
            'Transferencia'
          ]
        }
      }

     return(req)
    } else {
      const responsePlaceOrder: any = {}
      responsePlaceOrder.error = {
        message:
          'ESTA ORDEN YA FUE TRANSFERIDA '
      }
      return responsePlaceOrder
    }
    } catch (error) {
      console.log(error)
    }


}

