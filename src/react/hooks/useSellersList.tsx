import { useEffect, useState } from 'react'
import { useLazyQuery } from 'react-apollo'
import getSellers from '../graphql/getSellers.graphql'

export const useSellersList = () => {
  const [sellersList, setSellersList ]:any = useState([])
  const [listSellers, { data, loading:loadingSellers, error }] = useLazyQuery(getSellers)
  const paging = data?.sellers?.paging

  useEffect(()=>{
    listSellers({
      variables:{
        pagination:{
          from:0,
          to:100
        }
      }
    })
  }, [])

  useEffect(()=>{
    if(paging?.total > paging?.to){
      listSellers({
        variables:{
          pagination:{
            from:paging?.to,
            to: paging?.total
          }
        }
      })
    }
  }, [data])

  useEffect(()=>{
    !!data
    &&
    setSellersList([
      ...sellersList,
      ...data?.sellers?.items
    ])
  }, [data])

  return [sellersList, loadingSellers, error, paging]
}
