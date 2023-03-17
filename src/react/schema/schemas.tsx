import { parsePrice, parseDateAndHour } from "../helpers/parseData"

const unallowedStatus = ['canceled', 'invoiced']

export const ORDERS_SCHEMA = {
    list:[],
    items:[],
    paymentData:{
        transactions:[
            {
                payments:[
                    {
                        paymentSystemName:''
                    }
                ]
            }
        ]
    }
}

export const TOTALS_TABLE = {
    properties:{
        id:{
            title: 'Concepto',
        },
        name:{
            title: 'Descripción',
        },
        value:{
            title: 'Costo total',
            cellRenderer: ({cellData}:any) => parsePrice({price:cellData})
        }
    },
}

export const ORDERS_LIST_SCHEMA = {
    properties: {
      clientName: {
        title: 'Nombre',
      },
      creationDate:{
        title: 'Fecha - Hora',
        width: 200,
        cellRenderer: ({ cellData }:any) => parseDateAndHour( { date:cellData } )
      },
      orderId: {
        title: 'Order Id',
        width: 210
      },
      totalItems: {
        title: '# de productos',
        with:20,
        cellRenderer: ({rowData}:any) => {
          const value = !!rowData?.totalItems ? rowData?.totalItems : rowData?.items?.length
          return value
        }
      },
      totalValue:{
        title: 'Valor total',
        cellRenderer: ({rowData}:any) => {
          const price = !!rowData?.totalValue ? rowData?.totalValue : rowData?.value
          const parsedPrice = parsePrice({price})
          return !parsedPrice ? '' : parsedPrice
        }
      },
      status:{
        title: 'Estado',
        cellRenderer: ({ cellData }:any) => {
          const isAllowed = !unallowedStatus.includes(cellData)
          if(isAllowed){
            return (
              cellData
            )
          }
          return <p className='c-danger'>{ cellData }</p>
        }
      }
    },
}