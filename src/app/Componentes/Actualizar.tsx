import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { actualizarPersona, obtenerPersona,} from '../Firebase/Promesas';
import { Console } from 'console';

export const Actualizar = () => {
  const params = useParams()
  const [nombre, setNombre] = useState("")
  const [Correo, setCorreo] = useState("")
  const [Contrasena, setContrasena] = useState("")
  const [edad, setEdad] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [Fecha, setFecha] = useState("")
  const [Genero, setGenero] = useState("")
  const [Aceptar, setAceptar] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
    const [idPersona,setIdPersona] = useState("")
  useEffect(()=>{
    if(params.idPersona!=undefined){
       obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setCorreo(v.Correo)
            setContrasena(v.Contrasena)
            setEdad(""+v.edad)
            setTelefono(""+v.Telefono)
            setFecha(v.Fecha)
            setGenero(v.Genero)
            setAceptar(v.Aceptar)
            setIdPersona(v.idPersona)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const actualizar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        Correo,
        Contrasena,
        edad:parseInt(edad),
        Telefono:parseInt(Telefono),
        Fecha,
        Genero,
        Aceptar,

    }
    //actualizar
    actualizarPersona(idPersona,p).then(()=>{
        alert("Se actualizo con exito")
    })
    //registrarPersona(p)
    console.log(nombre);
    console.log(Correo)
    console.log(Contrasena);
    console.log(edad);
    console.log(Telefono);
    console.log(Fecha);
    console.log(Genero);
    console.log(Aceptar)

    alert("Bienvenido "+nombre+" "+Correo);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>

        <label>Correo: </label><br/>
        <input type="email" 
          onChange={(e)=>setCorreo(e.target.value)}
          value={Correo}
          /><br/>   
          
        <label>Contraseña: </label><br/>
        <input type="password"
          onChange={(e)=>setContrasena(e.target.value)}
          value={Contrasena}
          /><br/>     
        <label>Edad: </label><br/>
        <input type="number"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/>
        <label>Telefono: </label><br/>
        <input type="tel"
          onChange={(e)=>setTelefono(e.target.value)}
          value={Telefono}
          /><br/>
        <label>Fecha: </label><br/>
        <input type="date"
          onChange={(e)=>setFecha(e.target.value)}
          value={Fecha}
          /><br/>
        <label>Genero: </label><br/>
        <input type="radio"
          onChange={(e)=>setGenero(e.target.value)}
          value={Genero}
          /><br/>
        <label>Aceptar terminos y condiciones: </label><br/>
        <input type="checkbox"
          onChange={(e)=>setAceptar(e.target.value)}
          value={Aceptar}
          /><br/>
        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}