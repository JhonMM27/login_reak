import React from 'react'
import "./Boton.css"

const Boton = ({type = "buttom", children}) => {
    return (
        <button className='boton' type={type}>{children}</button>
    )
}

export default Boton