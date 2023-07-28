'use client'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Saludo } from '../Componentes/Saludo';
import { Formulario } from '../Componentes/Formulario'; // Verifica que la importación sea correcta
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar';
import Vip from '../Componentes/Vip';
import Ubicacion from '../Componentes/Ubicacion';
import Productos from '../Componentes/Productos';
import { Eliminar } from '../Componentes/Eliminar';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Saludo nombre={""} />} />
      <Route path='/formulario' element={<Formulario />} /> {/* Verifica que el componente Formulario esté importado correctamente */}
      <Route path='/mostrar' element={<Registros />} />
      <Route path='/actualizar/:idPersona' element={<Actualizar />} />
      <Route path='/Ubicacion' element={<Ubicacion />} />
      <Route path='/Vip' element={<Vip />} />
      <Route path="/productos" element={<Productos />} />
      <Route path='/eliminar/:idPersona' element={<Eliminar />} />
    </Routes>
  );
};

