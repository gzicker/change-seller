import React, { useRef, useState } from 'react';
import {ModalDialog, AutocompleteInput} from 'vtex.styleguide'
import { useSellersList } from '../hooks/useSellersList'

interface Props{
    modalState:boolean
    close: any
    handleConfirmation: any
    isLoading: boolean
    originSeller:string
}

interface Item{
  value:string,
  label:string,
  deliveryPolicy:string
}

const ListSellers = (props:Props) => {
    const {
      modalState,
      close,
      handleConfirmation,
      isLoading,
      originSeller
    } = props
    const [optionState, setOptionState] = useState('Seleccione un seller')
    const [deliveryPolicy, setDeliveryPolicy] = useState('')
    const [term, setTerm] = useState('')
    const timeoutRef:any = useRef(null)
    const [loading, setLoading] = useState(false)
    const [ sellers, loadingSellers, error ] = useSellersList()

    const handleDropdownChange = (args:Item) =>{
      if(!!args){
        const { deliveryPolicy, value } = args
        setDeliveryPolicy( deliveryPolicy )
        setOptionState( value )
      }
    }

    console.log('originSeller: ', originSeller)

    const input = {
      onChange: (term:string) => {
        if (term) {
          setLoading(true)
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          timeoutRef.current = setTimeout(() => {
            setLoading(false)
            setTerm(term)
            timeoutRef.current = null
          }, 1000)
        } else {
          setTerm(term)
        }
      },
      onSearch: (args:any) => console.log('args: ', args),
      onClear: () => setTerm(''),
      placeholder: 'Search seller... (e.g.: swl1)',
      value: term,
    }

    const findValues = () =>{
      const match = (item:any) => item.value.toLowerCase().includes(term?.toLowerCase())
      const values =  sellers?.filter((item:any) => match(item))
      const value = !term.length ? [] : values
      return value
    }

    const options = {
      onSelect: (args:any) => handleDropdownChange(args),
      loading,
      value: findValues()
    }

    return(
      <ModalDialog
        centered
        isOpen={modalState}
        onClose={close}
        loading={loadingSellers || isLoading}
        confirmation={{
          onClick: () => handleConfirmation(optionState, deliveryPolicy),
          label: 'Continuar',
          isDangerous: false,
        }}
        cancelation={{
          onClick: close,
          label: 'Cancel',
        }}
        >
          {
            isLoading
            ?
            <>
              <p>Simulation in progress...</p>
            </>
            :
            <AutocompleteInput
              input = { input }
              options={ options }
            />
          }
        {
          error
          &&
          <p className='c-danger'>One error has been occurred loading sellers</p>
        }
      </ModalDialog>
    )
}

export default ListSellers
