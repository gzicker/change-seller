import React, { useEffect, useState } from 'react'

import { Modal } from 'vtex.styleguide'

interface Props{
  open:boolean,
  error?:boolean
}

const ModalError = (props:Props) => {

    const { open, error } = props
    const [isOpen, setIsOpen] = useState(open)
    const [state, setState] = useState({
      class: '',
      title: '',
      message:''
    })

    useEffect(()=>{
      { !!error && error
        ?
        setState({
          class:'c-danger',
          title:'Error!',
          message: 'Ha ocurrido un error en el sistema, por favor intente hacer su consulta nuevamente'
        })
        :
        setState({
          class:'c-warning',
          title:'Warning!',
          message:'No hay items disponibles para realizar el cambio de orden'
        })
      }
    }, [error])

    return (
        <Modal centered isOpen = { isOpen } onClose = { () => setIsOpen(!isOpen) }>
          <p className={`${state.class} t-heading-3`}> {state?.title} </p>
          <p className='t-body'> {state?.message} </p>
        </Modal>
    )
}

export default ModalError
