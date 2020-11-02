import {useState} from 'react'

const Prices=(props)=>{
    const [currency,setCurrency]=useState("USD")
    return(
        <div>
            <div className='alert alert-success'>{props.bpi_data.bpi.USD.description}</div>
            <span className='label label-danger'>{props.bpi_data.bpi.USD.rate}</span>
        </div>
    )
}
export default Prices