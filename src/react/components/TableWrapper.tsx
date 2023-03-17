import React from "react"
import { NumericStepper, Table } from 'vtex.styleguide'
import '../styles/OrderDetails.css'


interface Props{
  orders:any
  onChange:any
  items:any
}

const TableWrapper = ({ orders, onChange, items}:Props) => {

  const ITEMS_TABLE = {
    properties:{
      name: {
        title: 'Nombre de producto',
        width: 350
      },
      quantity: {
        title: 'Cantidad inicial',
        width: 150,
        cellRenderer: ({ cellData }:any) => (
          <div className= { `ml7 t-heading-5` }> { cellData } </div>
        )
      },
      price: {
        title: 'Precio unitario',
        width: 150,
        headerRight: true,
        cellRenderer: ({ cellData }:any) => (
          <div className='w-100 tr'> $ { cellData / 100 } </div>
        )
      },
      total: {
        title: 'Total',
        width: 150,
        headerRight: true,
        cellRenderer: ({ rowData }:any) => (
          <div className='w-100 tr'> $ {rowData.price * rowData.quantity / 100} </div>
        )
      },
      actions:{
        title:'Nueva cantidad',
        width: 180,
        headerRight: true,
        cellRenderer:({ rowData }:any) => {
          return(
            <div className="ml5">
              <NumericStepper
                onChange={ (e:any) => onChange(e, rowData.id) }
                value={ items[rowData.id].quantity }
                size='small'
              />
            </div>
          )
        }
      },
      newTotal: {
        title: 'Nuevo Total',
        width: 150,
        headerRight: true,
        cellRenderer: ({ rowData }:any) => (
          <div className='w-100 tr'> $ {rowData.price * items[rowData.id].quantity / 100} </div>
        )
      },
    }
  }

  return (
    <>
      <h3 className='t-heading-3'>{'Items'}</h3>
      {Object.values(items).length <= 0 && <>NAN</>}
      {Object.values(items).length >= 1 &&
        <Table
          items = { orders.items }
          schema = { ITEMS_TABLE }
          fullWidth = { true }
        />
      }
    </>
  )
}

export default TableWrapper
