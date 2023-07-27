import React from 'react'

export const Ubicacion: React.FC = () => {
  return (
    <div>
        <h1>Ubicacion de la tienda</h1>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.8258033873359!2d-70.3363404304143!3d-27.36624439852372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698047600ba033f%3A0xff64b77ab7037563!2sTransportes%20los%20Conquistadores!5e0!3m2!1ses-419!2scl!4v1683170019254!5m2!1ses-419!2scl"
        width="800"
        height="400"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
        ></iframe>
    </div>
  );
};


export default Ubicacion;