import React, { FC, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import useRequest from '../hooks/useRequest'
import paymentMethods from '../graphql/listPayments.graphql'
import simulateOrderMutation from '../graphql/orderSimulation.graphql'
import changeOrderSeller from '../graphql/changeOrder.graphql'
import { useFullSession } from 'vtex.session-client'
import { useQuery, useMutation } from 'react-apollo'
import { parseNewOrderData, valuesMessage } from '../helpers/parseNewOrderData'
import { Link } from 'vtex.render-runtime'
import {
  Table,
  Spinner,
  Divider,
  Button,
  Box,
  Modal
} from 'vtex.styleguide'

import TableWrapper from './TableWrapper'
import ListSellers from './ListSellers'
import GeneralData from './GeneralData'
import SimulationTable from './SimulationTable'
import ModalError from './ModalError'

import '../styles/OrderDetails.css'
import {ORDERS_SCHEMA, TOTALS_TABLE} from '../schema/schemas'
import { parseMessages, simulationData } from '../helpers/parseData'
import ConfirmationModal from './ConfirmationModal'

const statusToHide = ['canceled']

const OrderDetails: FC = () => {
  const location = window?.location
  const [ isOpen, setIsOpen ] = useState(true)
  const {state ,getData}  = useRequest(ORDERS_SCHEMA)
  const { data:currentSession } = useFullSession()
  const {data:orders, loading, error} = state
  const paymentData = orders.paymentData.transactions
  const [ transactions ] = paymentData
  const { payments } = transactions
  const [ paymentMethod ] = payments
  const [allowedPaymentMethods, setAllowedPaymentMethods] = useState([''])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [allowedMessage, setAllowedMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [items, setItems]:any = useState({})
  const [deliveryPolicy, setDeliveryPolicy] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [modalState, setModalState] = useState(false)
  const [messages, setMessages] = useState([{}])
  const [primaryActionText , setPrimaryActionText ] = useState('Simulate order')
  const [to, setTo] = useState('/admin/app/change-seller')
  const [alert, setAlert] = useState(false)
  const [ orderId, setOrderId ] = useState('')
  const [warn, setWarn] = useState('')
  const [targetSeller, setTargetSeller] = useState('');
  const {data:paymentMethodsList, loading:allowedMethodsLoader} = useQuery(paymentMethods)
  const [
    orderSimulation,
    {data:simulation, error:simulationError, loading:isLoading}
  ]  = useMutation(simulateOrderMutation)
  const [
    changeOrder,
    {
      data: changeOrderResponse,
      error: changeOrderError,
      loading: changeOrderLoading
    }
  ]  = useMutation(changeOrderSeller)

  const [confirmationModalState, setConfirmationModalState] = useState({
    confirmation: () => {},
    modalState: false,
    message: '',
    loading: changeOrderLoading
  })

  useEffect(() => {
    const urlPharam = location?.pathname.split('/')
    const orderId = urlPharam[urlPharam.length - 1]
    const endpoint = `/api/oms/pvt/orders/${orderId}`
    getData(endpoint)
  }, [location])

  useEffect(()=>{
    const allowedMethods = paymentMethodsList?.listPayments?.filter((method:any) => method?.isAllowed)
    const _paymentMethods = allowedMethods?.map((method:any) => method?.paymentSystemName.toLowerCase().trim()) ?? []
    setAllowedPaymentMethods(_paymentMethods)
  }, [paymentMethodsList])

  useEffect(()=>{
    const paymentMethodGroup  = paymentMethod?.group?.toLowerCase()
    const methodsValidation = allowedPaymentMethods?.includes(paymentMethodGroup)
    const message = methodsValidation ? ' ' : 'El método de pago no permite transferir la orden'
    setAllowedMessage(message)
    setIsDisabled(!methodsValidation)
  }, [paymentMethod, allowedPaymentMethods])

  useEffect(()=>{
    const messages =  simulation?.simulateOrder?.messages
    if(!messages) return
    const optionalMessage = 'Todos los items pueden ser transferidos'
    const messagesList = parseMessages({messages, optionalMessage})
    setMessages(messagesList)
  }, [simulation])

  useEffect(()=>{
    const messages = changeOrderResponse?.changeOrder?.orderForm?.messages
    const generatedOrderData:any = !!changeOrderResponse?.changeOrder?.orders && changeOrderResponse?.changeOrder?.orders[0]
    const orderId = generatedOrderData?.orderId
    const messagesList = !!messages ? messages : []
    const totalizers  = changeOrderResponse?.changeOrder?.error?.totalizers
    setMessages(messagesList)
    if(!!changeOrderResponse?.changeOrder?.orders){
      setAlert(true)
      setOrderId(orderId)
    }else if(!!totalizers && totalizers.length){
      changeOrderData()
    }
  }, [changeOrderResponse])

  useEffect(() => {
    const _errors =  !!changeOrderResponse && changeOrderResponse?.changeOrder?.error?.message
    const totalizers  = changeOrderResponse?.changeOrder?.error?.totalizers
    if(!!_errors && !totalizers?.length){
      setErrorMessage(_errors)
      setModalState(true)
    }else if(totalizers?.length){
      const newShippingValue = totalizers?.find(({ id }:any) => id === 'Shipping').value / 100
      setWarn(`The logistic values was changed, the new shipping cost is $${ newShippingValue ?? 0 }`)
    }
  }, [changeOrderResponse])

  const handleClose = () => setIsModalOpen(false)

  const handleConfirmation = async (sellerId:string, deliveryPolicy:string) => {
    setDeliveryPolicy( deliveryPolicy )

    await orderSimulation({
      variables:{
        data: simulationData({order:orders, items, sellerId, deliveryPolicy })
      }
    })

    setTargetSeller(sellerId);
    setIsOpen(!isOpen)
    setPrimaryActionText('Transfer order')
    setTo(location?.href)
    setIsModalOpen( false )
  }

  const onChange = (e:any, id:string) => {
    if(!simulation){
      const item = items[id]
      const quantity = e.value
      setItems({...items, [id]:{ ...item, quantity:quantity}})
    }
  }

  useEffect(()=>{
    let quantities = {}
    orders.items.forEach((ord:any) => {
      const {id, quantity, attachments} =  ord
      const newOrder = {id:id, quantity:quantity, attachments:JSON.stringify(attachments)}
      quantities = {...quantities, [id]:newOrder}
    })
    setItems({...items, ...quantities})
  }, [orders])

  const transpherOrder = ( { data }:any ) => {
    try{
      changeOrder({
        variables:{
          data:{...data}
        }
      })
    }catch(error){
      console.error('One error was ocurred: ', error)
    }
  }

  const changeOrderData = async() => {
    const simulationItems = simulation?.simulateOrder?.items
    const totalizers  = changeOrderResponse?.changeOrder?.error?.totalizers
    const message = valuesMessage(totalizers)


    const Data = parseNewOrderData({
      data:orders,
      items: simulationItems,
      sessionData: currentSession,
      deliveryPolicy,
      localItems: items,
      simulation,
      targetSeller
    })

    setConfirmationModalState({
      ...confirmationModalState,
      confirmation: () => transpherOrder({data:Data}),
      modalState: true,
      message: message ?? Data.coments
    })

  }

  const handleClick = () => {
    const simulationItemsLength = simulation?.simulateOrder?.items?.length
    if(!simulation){
      setIsModalOpen(true)
    }else if (simulationItemsLength > 0){
      changeOrderData()
    }else if (simulationItemsLength === 0){
      setModalState(true)
      setErrorMessage('La ordén no tiene items disponibles para transferir')
    }
  }

  const handleCancelation = () => {
    location.href = '/admin/app/change-seller'
  }

  return (
    <>
      {
        loading || allowedMethodsLoader || allowedMethodsLoader
        ?
        <Spinner />
        :
        statusToHide.includes(orders?.status)
        ?
        <>
          <p className='t-heading-5'>
            La orden <strong>{ orders?.orderId }</strong> fue cancelada, por lo tanto no puede ser transferida
          </p>
        </>
        :
        <>
          <GeneralData
            orders = { orders }
            message = { allowedMessage }
            paymentMethods = { allowedPaymentMethods }
            paymentMethod = { paymentMethod }
          />
          <Divider orientation='horizontal' />
          <Box>
            <Table
              items = { orders?.totals }
              schema = { TOTALS_TABLE }
              fullWidth = { true }
            />
            <TableWrapper
              orders={ orders }
              onChange = { onChange }
              items = { items }
            />
            <SimulationTable messages={ messages }/>
          </Box>
          <Box>
            <Link to={ to } >
              <Button variation='tertiary'>
                <FormattedMessage id='change-seller.order-details-buttons.go-back' />
              </Button>
            </Link>
            <span className='ph3'></span>
            <Button
              onClick = { handleClick }
              disabled={ isDisabled }
              isLoading = { changeOrderLoading }
            >
              { primaryActionText }
            </Button>
          </Box>
          <ListSellers
            modalState={ isModalOpen }
            close={ handleClose }
            handleConfirmation = { handleConfirmation }
            isLoading = { isLoading }
            originSeller={ orders?.merchantName }
          />
          <Modal isOpen = { modalState } onClose={ () => setModalState(!modalState) }>
            <p className='c-danger t-heading-5'>{ errorMessage }</p>
          </Modal>
          <ConfirmationModal
            props = {{...confirmationModalState, loading:changeOrderLoading}}
            setConfirmationModalState = { setConfirmationModalState }
          />
        </>
      }
      {
        !!error || !!simulationError || !!changeOrderError
        ?
        <ModalError open={ isOpen } error={ true } />
        :
        ''
      }
      <Modal
        centered
        isOpen={alert}
        onClose={handleCancelation}>
        <div className="">
          <p className="f3 f3-ns fw3 t-heading-3 c-success">
            ¡Success!
          </p>
          <p>
            Your order has been succesfully created
          </p>
          <p>
            New order id: { orderId }
          </p>
          {
            !!warn
            &&
            <>
              <p className='t-heading-5'><strong>Note:</strong>{ warn }</p>
            </>
          }
        </div>
      </Modal>
    </>
  )
}

export default OrderDetails
