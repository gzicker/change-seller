import React from 'react'
import { Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import '../styles/SelectOrder.css'

const CSS_HANDLES = ['pagination__wrapper', 'pagination__buttons']

interface Props{
    page:number
    setPage:any
}

const Pagination = ({page, setPage}:Props) => {

    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles.pagination__wrapper} pa4`}>
            <div className={`${handles.pagination__buttons}`}>
              <div className='ma4'>
                <Button 
                  variation="tertiary" 
                  onClick={() => setPage((old:number) => Math.max(old - 1, 0))}
                  disabled={page === 1}
                > 
                  {'<'} 
                </Button>
              </div>
              <div className='ma4'>
                <Button variation="tertiary" onClick={() => setPage((old:number) => old + 1)}> {'>'} </Button>
              </div>
            </div>
            <div>
              <p>Page {page}</p>
            </div>
        </div>
    )
}

export default Pagination