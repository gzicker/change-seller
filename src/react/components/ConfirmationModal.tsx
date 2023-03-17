import React, { useEffect, useState } from 'react'
import { ModalDialog } from 'vtex.styleguide'

interface Props{
    props:{
        confirmation: any
        modalState: boolean,
        message: string,
        loading: boolean
    }
    setConfirmationModalState:any
}

const ConfirmationModal  = ({ props, setConfirmationModalState }:Props) => {

  const {confirmation, modalState, message, loading} = props
    const [state, setState] = useState(modalState)
    
    const handleClose = () => {
        setConfirmationModalState({
          ...props,
          modalState: false
        })
    } 
    
    useEffect(()=>{
        setState(modalState)
    }, [modalState])

    return (
      <div>
        <ModalDialog
          centered
          loading={ loading }
          confirmation={{
            onClick: confirmation,
            label: 'Transferir',
            isDangerous: false,
          }}
          cancelation={{
            onClick: handleClose,
            label: 'Cancelar',
          }}
          isOpen={ state }
          onClose={ handleClose }>
          <div className="">
            <p className="f3 f3-ns fw3 gray">
              Resumen de la transferencia
            </p>
            <div>
                { message.split('\n').map((textLine:string, index:number)=>{
                  return(
                    <p key={textLine + index}> { textLine } </p>
                  )
                }) }
            </div>
          </div>
        </ModalDialog>
      </div>
    )    
}
  
export default ConfirmationModal