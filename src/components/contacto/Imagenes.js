import React from 'react';

export default function Imagenes({img, nombre}) {
  return (
    <>
      <a>
        <h2>{nombre}</h2>
        <img src={img} className="icon" alt="contacto"/>
      </a>
    </>
  )
}
