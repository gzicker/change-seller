import React, { FC, useEffect, useState } from 'react';
import { InputSearch, Divider, Table, Spinner } from 'vtex.styleguide'
import ModalError from './ModalError';
import { ORDERS_LIST_SCHEMA } from '../schema/schemas';
import Pagination from './Pagination';
import useHandleChange from '../hooks/useHandleChange';
import useSearchType from '../hooks/useSearchType';


const SelectOrder: FC = () => {

  const [handleChange, input]:any = useHandleChange()
  const [page, setPage] = useState(1)
  const [ handleSearch, { data:orders, loading, error }]:any = useSearchType({ input, page })
  const [message, setMessage] = useState('')

  const showOrderDetail = (orderId:string) => {
    location.assign(`/admin/app/change-seller/${orderId}`)
  }

  const search = () =>{
    handleSearch()
  }

  useEffect(()=>{
    handleSearch()
  }, [ page ])

  useEffect(()=>{
    const ordersList = orders[0]?.list
    if(!!ordersList && !ordersList?.length){
      setMessage('Ordenes no encontradas')
    }else{
      setMessage('')
    }
  }, [ orders ])

  const ordersFilter = () =>{
    const toHide = ['canceled']
    const match = (order:any) => !toHide.includes(order?.status)
    return orders.filter(match)
  }

  return (
    <div>
      <InputSearch
        placeholder = 'Búscar ordenes por correo o Id de la orden...'
        size = 'regular'
        value = { input }
        onChange = { handleChange }
        onSubmit = { search }
      />
      <Divider orientation='horizontal' />
      {
        loading && !error
        ?
        <Spinner />
        :
        <>
          <p className='pa3 t-action--small c-action-primary'>{ message }</p>
          <Divider orientation='horizontal' />
          <Table
            fullWidth
            schema={ ORDERS_LIST_SCHEMA }
            items={ ordersFilter() }
            onRowClick = {({rowData}:any) => showOrderDetail(rowData?.orderId)}
          />
          <Pagination page={ page } setPage={ setPage }/>
        </>
      }
      {error &&
        <ModalError open={true} error={true}/>
      }
    </div>
  )
}

export default SelectOrder
