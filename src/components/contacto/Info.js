import React from 'react';

export default function Info({img, nombre, link}) {
  return (
    <>
      <a href={link} target="_blanck">
        <h2>{nombre}</h2>
        <img src={img} className="icon" alt="contacto"/>
      </a>
    </>
  )
}
