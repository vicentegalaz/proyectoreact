import React from 'react';
import { Link } from 'react-router-dom';
import './HeaDer.css';

export const Header = () => {
  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/formulario">Formulario</Link>
      <Link to="/mostrar">Registros</Link>
      <Link to="/Vip">Usuarios VIP</Link>
      <Link to="/Ubicacion">Ubicación</Link>
      <Link to="/productos">Productos</Link>
    </nav>
  );
};
