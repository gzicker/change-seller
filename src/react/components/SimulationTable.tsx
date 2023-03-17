import React from 'react'
import {
    Table
} from 'vtex.styleguide'


const SCHEMA = {
    properties:{
        text:{
            title: 'Mensajes'
        }
    }
}

interface Props{
    messages:any
}

const SimulationTable = ({ messages }:Props) => {
    return (
        <>
            {   
                !!messages && messages.length >= 1
                ? 
                <Table
                    items = { messages }
                    schema = { SCHEMA }
                    fullWidth = { true }
                />
                :
                null
            }
        </>
    )
}

export default SimulationTable