interface Props{
    url:string
    page:number|string
}

export const getData = async({url, page}:Props) =>{
    const response = await fetch(url + `per_page=${10}&page=${page}`)
    if(!response.ok){
        throw new Error('One error has been ocurred getting orders')
    }
    return response.json()
}