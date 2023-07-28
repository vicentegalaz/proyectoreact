import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado[0])
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.Correo}</td>
                    <td>{p.Contrasena}</td>
                    <td>{p.edad}</td>
                    <td>{p.Telefono}</td>
                    <td>{p.Fecha}</td>
                    <td>{p.Genero}</td>
                    <td>{p.Aceptar}</td>
                    <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Contrasena</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Fecha</th>
            <th>Genero</th>
            <th>Aceptar terminos y condiciones</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
