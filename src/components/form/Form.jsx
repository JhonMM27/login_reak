
import React, { useState } from 'react'
import "./Form.css"
import Imput from '../imputs/Imput'
import Boton from '../Boton/Boton'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {

    // Para Verificar las contraseñas con el uso de useSatate

    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Para Guardar y modificar datos del form
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        confirmarContraseña: ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.contraseña !== formData.confirmarContraseña) {
            setError("Las contraseñas no coincides. No seas Huevon")
            return;
        }
        
        setError("");

        localStorage.setItem("usuario",JSON.stringify({
            correo: formData.correo,
            contraseña: formData.contraseña
        }))

        alert("Registro Exitoso")
        navigate("/login")
        // console.log("datos --> ", formData)
    }

    return (
        <section className="register">
            <form onSubmit={handleSubmit}>
                <h3>Registro</h3>
                <Imput
                placeholder = "Jose"
                    type="text"
                    dato="Nombres"
                    required
                    name = "nombre"
                    onChange = {handleChange}
                />
                
                <Imput
                placeholder = "..@.com"
                    type="email"
                    dato="Correo"
                    required
                    name = "correo"
                    onChange = {handleChange}
                />

                <Imput
                placeholder = "contraseña"
                    type="password"
                    dato="Contraseña"
                    required
                    name = "contraseña"      
                    onChange = {handleChange}          
                />

                <Imput
                placeholder = "confirmar contraseña"
                    type="password"
                    dato="Confirmar Contraseña"
                    required
                    name = "confirmarContraseña"
                    onChange = {handleChange}
                />
                {error && <p className='error-message'>{error}</p>}
                <Boton type = "submit">Registrar</Boton>
                <p>¿Ya tienes una Cuenta? <Link to = "/login">Iniciar Sección</Link></p>
            </form>
        </section>
    )
}

export default Form