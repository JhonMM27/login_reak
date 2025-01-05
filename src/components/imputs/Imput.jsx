import React from 'react'
import './Imput.css'

const Imput = ({placeholder, type, dato, required, name , onChange}) => {

    let placeholderModificado = `${placeholder}..`;

    return (
        <div className='inputs'>

            <input type = {type || "text"} id="nombres"
            required = {required} placeholder= {placeholderModificado}
            name = {name}
            onChange={onChange}
            
            />


            <div className="label">{dato}</div>
            
        </div>
    )
}

export default Imput