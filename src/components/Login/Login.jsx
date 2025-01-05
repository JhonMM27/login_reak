import React, { useState } from 'react'
import Imput from '../imputs/Imput'
import Boton from '../Boton/Boton'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

        const [formData, setFormData] = useState({
            correo: "",
            contraseña: "",
        })

        const [error, setError] = useState("");
        const navigate = useNavigate();

        const handleChange = (e) => {
            const {name,value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            })
        }
        
    
        const handleSubmit = (e) => {
            e.preventDefault();
            
            const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"))

            if(!usuarioRegistrado){
                setError("No hay nadie registrado ps invesil");
                return;
            }

            if(formData.correo !== usuarioRegistrado.correo ||
                formData.contraseña !== usuarioRegistrado.contraseña) {
                    setError("Correo o contra incorrecto. no seas huevon")
                    return;
            }
            
            
            setError("");
            alert("Inicio Exitoso")
            // console.log("datos --> ", formData)

            navigate("/welcome",{state:{correo: formData.correo}})

        }

    return (
        <section className="register">
        <form onSubmit={handleSubmit}>
            <h3>Inicio de Sesion</h3>

            <Imput
            placeholder = "..@.com"
                type="email"
                dato="Correo"
                required
                name = "correo"
                onChange={handleChange}
            />

            <Imput
            placeholder = "contraseña"
                type="password"
                dato="Contraseña"
                required
                name = "contraseña"    
                onChange={handleChange}  
            />

            {error && <p className='error-message'>{error}</p>}

            <Boton type = "submit">Iniciar Sesión</Boton>

            <p>¿No tienes una Cuenta? <Link to = "/">Registrarse</Link></p>
        </form>
    </section>
    )
}

export default Login