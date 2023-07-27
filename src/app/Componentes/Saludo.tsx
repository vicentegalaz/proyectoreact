import React from 'react'
interface Props{
    nombre:string|number,
    apellido?:string,
}

export const Saludo = (props:Props) => {
  return (
    <div>
      <h1>
        Bienvenidos a nuestra tienda Leyendas del Rock y metal
      </h1>
      <p>
        Esta es una tienda de prendas y accesorios, donde encontraras productos como poleras, chalecos, piercings y entre otros.
        Aca encontraras de todo para lucir de una manera ruda y metalera.
        </p><br /><br />
        <p>
        En nuestra tienda encontraras poleras sobre bandas de rock y metal, ya sea de bandas famosas o underground.
        Tambien podras encontrar una gran coleccion de poleras de anime y videojuegos.
        </p>
    
    </div>
  )
}
