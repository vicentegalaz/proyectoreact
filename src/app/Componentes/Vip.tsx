import React from 'react'
import usuario1 from '../Componentes/Imagenes/Captura de pantalla 2023-07-27 031346.png'
import usuario2 from '../Componentes/Imagenes/Captura de pantalla 2023-07-27 030517.png'
import usuario3 from '../Componentes/Imagenes/Captura de pantalla 2023-07-27 030605.png'
import usuario4 from '../Componentes/Imagenes/Captura de pantalla 2023-07-27 031307.png'

export const Vip: React.FC = () => {
  return (
    <div>
        <h1>Aca mostraremos a nuestros clientes vip de la tienda</h1>
        <img src={usuario1.src} height="200" width="200" />
        <p>Usuario Chico Guido</p><br />
        <img src={usuario2.src} height="200" width="200" />
        <p>Usuario Manuel Llaitul</p><br />
        <img src={usuario3.src} height="200" width="200" />
        <p>Usuario Luciano Catrillanca</p><br />
        <img src={usuario4.src} height="200" width="200" />
        <p>Usuario Peiro Escobar</p><br />
    </div>
  )
}

export default Vip