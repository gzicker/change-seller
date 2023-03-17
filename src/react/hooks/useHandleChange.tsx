import { useState } from 'react'

const useHandleChange = () => {
    const [state, setState] = useState('')
  
    const handleChange = (e:any) => {
        const target = e?.target
        const value = target?.value
        setState(value)
    }

    return [handleChange, state]
}

export default useHandleChange