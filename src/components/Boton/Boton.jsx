import React from 'react'
import "./Boton.css"

const Boton = ({type = "buttom", children, onClick}) => {
    return (
        <button className='boton' type={type} onClick={onClick}>{children}</button>
    )
}

export default Boton