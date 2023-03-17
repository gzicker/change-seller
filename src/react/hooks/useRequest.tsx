import { useState } from "react"
import axios from "axios"

const useRequest = (schema?:any) => {
    const [state, setState] = useState({
        data:{...schema},
        loading: false,
        error: false
    })

    const getData = async (endpoint: any): Promise<void> => {
        setState({...state, loading:true})
        try {
            const { data }: any = await axios.get(`${endpoint}`)
            setState({
                ...state,
                data: data,
                loading: false
            })
        } catch {
            setState({
                ...state,
                error: true
            })
        }
    }

    return {state, getData}
}

export default useRequest