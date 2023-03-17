import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import {
    Divider,
    Box
  } from 'vtex.styleguide'


interface Props{
  orders:any
  message:string
  paymentMethod:any
  paymentMethods:string[]
}

const GeneralData = ( props:Props ) => {

    const {
      orders,
      message,
      paymentMethod,
      paymentMethods
    } = props

    const [localMessage, setLocalMessage]:any = useState('')

    useEffect(() => {
      if(!!message && message !== ''){
        setLocalMessage( <FormattedMessage id={ message } /> )
      }
    }, [message])

    return (
      <Box>
        <h2><FormattedMessage id='change-seller.general-data.title-1' /></h2>
        <p className='ml4 t-action'>
          <FormattedMessage id='change-seller.general-data.t1-item-1' />
          <span className='ml4 t-action--small'>
            { `${orders?.clientProfileData?.firstName}  ${orders?.clientProfileData?.lastName}`}
          </span>
        </p>
        <p className='ml4 t-action'>
          <FormattedMessage id='change-seller.general-data.t1-item-2' />
          <span className='ml4 t-action--small'>
            { orders?.clientProfileData?.phone }
          </span>
        </p>

        < Divider orientation='horizontal' />

        <h2><FormattedMessage id='change-seller.general-data.title-2' /></h2>
        <p className=''><FormattedMessage id='change-seller.general-data.t2-item-1' />:</p>
        {paymentMethods?.map((method, idx) =>{
          return(
            <span key={ `${method}-${idx}` } className='c-action-primary mb4 pa2'>{ method }</span>
          )
        })}
        <p className='pv2'></p>
        < Divider orientation='horizontal' />
        <p className='mt4 mb4'>
          <span className='t-action--small'>
            <FormattedMessage id='change-seller.general-data.t2-item-2' />
          </span> { orders?.orderId }
        </p>
        <p>
          <span className='t-action--small'>
            <FormattedMessage id='change-seller.general-data.t2-item-3.1' />
          </span> {paymentMethod?.group}
        </p>
        <p>
          <span className='t-action--small'>
            <FormattedMessage id='change-seller.general-data.t2-item-3' />
          </span> { paymentMethod?.paymentSystemName }
        </p>
        <p>
          <span className='t-action--small'>
            Seller:
          </span> {orders?.merchantName?.toLowerCase()}
        </p>
        <span className='c-danger'>{ localMessage }</span>
      </Box>
    )
}

export default GeneralData
