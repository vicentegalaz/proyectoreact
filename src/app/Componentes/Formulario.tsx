'use client'
import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';
import './Formulario.css'; 

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [edad, setEdad] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Genero, setGenero] = useState('');
  const [Aceptar, setAceptar] = useState(false); 
  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');


  const registrar = () => {

    if (nombre.trim() === '') {
      setErrorNombre('No puede estar vacío');
    } else if (nombre.length < 3) {
      setErrorNombre('Debe tener al menos 3 letras');
    } else {
      setErrorNombre('');
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Correo.trim() === '') {
      setErrorCorreo('No puede estar vacío');
    } else if (!correoRegex.test(Correo)) {
      setErrorCorreo('El correo no es válido');
    } else {
      setErrorCorreo('');
    }

    // Validar otros campos del formulario
    if (edad.trim() === '') {
      setErrorEdad('No puede estar vacío');
    } else if (parseInt(edad) <= 0 || parseInt(edad) > 150) {
      setErrorEdad('La edad debe ser mayor que 0 y menor o igual a 150');
    } else {
      setErrorEdad('');
    }

    if (Telefono.trim() === '') {
      setErrorTelefono('No puede estar vacío');
    } else if (Telefono.length < 7 || !/^\d+$/.test(Telefono)) {
      setErrorTelefono('El teléfono no es válido');
    } else {
      setErrorTelefono('');
    }



    if (!errorNombre && !errorCorreo && !errorEdad && !errorTelefono) {
      const p: Persona = {
        nombre,
        Correo,
        Contrasena,
        edad: parseInt(edad),
        Telefono: parseInt(Telefono),
        Fecha,
        Genero,
        Aceptar,
      };
      registrarPersona(p);
      alert('Bienvenido ' + nombre + ' ' + Correo);
    }
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.trim() === '') {
      setErrorNombre('No puede estar vacío');
    } else if (valor.length < 3) {
      setErrorNombre('Debe tener al menos 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  const validarCorreo = (valor: string) => {
    setCorreo(valor);
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor.trim() === '') {
      setErrorCorreo('No puede estar vacío');
    } else if (!correoRegex.test(valor)) {
      setErrorCorreo('El correo no es válido');
    } else {
      setErrorCorreo('');
    }
  };

  const validarEdad = (valor: string) => {
    setEdad(valor);
    if (valor.trim() === '') {
      setErrorEdad('No puede estar vacío');
    } else if (parseInt(valor) <= 0 || parseInt(valor) > 150) {
      setErrorEdad('La edad debe ser mayor que 0 y menor o igual a 150');
    } else {
      setErrorEdad('');
    }
  };

  const validarTelefono = (valor: string) => {
    setTelefono(valor);
    if (valor.trim() === '') {
      setErrorTelefono('No puede estar vacío');
    } else if (valor.length < 7 || !/^\d+$/.test(valor)) {
      setErrorTelefono('El teléfono no es válido');
    } else {
      setErrorTelefono('');
    }
  };



  return (
    <form className="formulario">
      <label>Nombre:</label>
      <br />
      <input
        type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <span className="error">{errorNombre}</span>
      <br />
      <label>Correo:</label>
      <br />
      <input
        type="email"
        onChange={(e) => validarCorreo(e.target.value)}
        value={Correo}
      />
      <br />
      <span className="error">{errorCorreo}</span>
      <br />
      <label>Contraseña:</label>
      <br />
      <input
        type="password"
        onChange={(e) => setContrasena(e.target.value)}
        value={Contrasena}
      />
      <br />
      {/* Agrega otros campos del formulario */}
      <br />
      <label>Edad:</label>
      <br />
      <input
        type="number"
        onChange={(e) => validarEdad(e.target.value)}
        value={edad}
      />
      <br />
      <span className="error">{errorEdad}</span>
      <br />
      <label>Teléfono:</label>
      <br />
      <input
        type="tel"
        onChange={(e) => validarTelefono(e.target.value)}
        value={Telefono}
      />
      <br />
      <span className="error">{errorTelefono}</span>
      <br />
      {}
      {}
      <br />
      <label>Fecha: </label><br/>
        <input type="date"
          onChange={(e)=>setFecha(e.target.value)}
          value={Fecha}
          /><br/>
      <label>Género:</label>
      <br />
      <input
        type="radio"
        value="masculino"
        checked={Genero === 'masculino'}
        onChange={(e) => setGenero(e.target.value)}
      />{' '}
      Masculino
      <input
        type="radio"
        value="femenino"
        checked={Genero === 'femenino'}
        onChange={(e) => setGenero(e.target.value)}
      />{' '}
      Femenino
      <br />
      {}
      {}
      <br />
      <label>
        Aceptar términos y condiciones:
        <input
          type="checkbox"
          checked={Aceptar}
          onChange={(e) => setAceptar(e.target.checked)}
        />
      </label>
      <br />
      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
  );
};

export default Formulario;