import { useEffect, useState } from 'react'
// import { getData } from '../helpers/getData'
import getOrdersByEmail from '../graphql/getOrdersByEmail.graphql'
import { useLazyQuery } from 'react-apollo';
// import { useQuery } from 'react-query';
import useRequest from './useRequest';

interface Props{
    input:string
    page:number
    per_page?:number
}

const unallowedStatus = ['canceled', 'invoiced']

const useSearchType = ({ input, page, per_page = 10 }:Props) => {
  
    const [state, setState]:any = useState({
        data:[],
        loading: false,
        error: ''
    })
    // const { data, isLoading, error, refetch, isFetching } = useQuery('orders', () => getData({url, page}))
    const {getData, state:{ data, loading:isLoading, error }}:any = useRequest()    
    const [getOrders, { data:gqlOrders, loading }]:any = useLazyQuery(getOrdersByEmail)
    const { list:ordersList } =  !!data ? data : { list:[{}] }
    const emailRegex = /^\w+.?[a-z]*@[a-z]{4,10}.{1}[a-z]{2,10}.?[a-z]{0,10}$/
    const idRegex = /^[SLR]*[0-9\-?]{10,}$/

    const handleSearch = () => {
        const email = input?.match(emailRegex)
        const id = input?.match(idRegex)

        if(!input){
            const url = `/api/oms/pvt/orders/?per_page=${10}&page=${page}`
            getData(url)
        }else if(email?.length){
            const variables = {
                data:{
                    email:input,
                    page: page,
                    per_page: per_page
                }
            }
            getOrders({variables})
        }else if(id?.length){ 
            const url = `/api/oms/pvt/orders/${input}?per_page=${10}&page=${page}`
            getData(url)
        }

        return 
    }

    const filterOrders = (ordersList:any) => {
        if(!ordersList) return []
        const orders = ordersList?.filter((order:any) => !unallowedStatus.includes(order?.status))
        return orders
    }

    const parseOrders = () =>{
        !!ordersList && ordersList.length > 0
        ?
        setState({
            ...state,
            loading:false,
            data: filterOrders(ordersList)
        })
        :
        setState({
            ...state,
            loading:false,
            data:[data]
        })
    }

    useEffect(()=>{
        setState({
            ...state,
            loading:isLoading || loading
        })
    }, [isLoading, loading])

    useEffect(()=>{
        if(!!error){
            const message = 'Ocurrió un error buscando las ordenes'
            setState({
                ...state,
                error:message
            })
        }
    }, [error])

    useEffect(()=>{
        const orders = filterOrders(gqlOrders?.listOrders?.list)
        if(!!orders && orders.length){
            setState({
              ...state,
              data:orders,
              loading: false
            })
        }
    }, [ gqlOrders ])

    useEffect(() => {
        parseOrders()
    }, [ data ])

    return [handleSearch, state]
}

export default useSearchType