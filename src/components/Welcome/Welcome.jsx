import React from 'react'
import "./Welcome.css"
import Boton from '../Boton/Boton'
import { useLocation, useNavigate } from 'react-router-dom'

const Welcome = () => {

    const location = useLocation();
    const {correo} = location.state || {};
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.setItem("usuarioActivo", "false")
        navigate("/login")
    }
    return (
        <section className='welcome'>

        <nav>
            <h3>Bienvenido {correo}</h3>
            <Boton onClick = {handleLogout}>Cerrar Sesión</Boton>
        </nav>

        <div className="container">

        </div>

        </section>
    )
}

export default Welcome