import React from 'react';

import Imagenes from './Imagenes.js';

import cv from './img/cv.png';
import email from './img/email.png';
import linkedin from './img/linkedin.png';
import instagram from './img/instagram.png';
import github from './img/github.png';

export default function Contacto() {

  const imagenes = [
    {
      nombre: 'Email',
      img: email      
    },
    {
      nombre: 'cv',
      img: cv      
    },
    {
      nombre: 'Github',
      img: github   
    },
    {
      nombre: 'Linkedin',
      img: linkedin      
    },
    {
      nombre: 'Instagram',
      img: instagram      
    }
  ]

  return (
    <>
      <section id='contacto' className='h-screen w-full flex bg-[#00a2ff] justify-center items-center bg-cover bg-center'
        style={{ "backgroundImage": `url()` }}>
        <div className='max-w-[400px] min-w-[300px] max-h-screen h-[85%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.7)]
        text-white flex flex-col text-[1.5rem] items-center text-center justify-evenly'>
          <h1 className='Fjalla-One text-[2rem]'>Contacto</h1>
          <div className='w-[70%] h-[90%] flex justify-evenly items-center flex-wrap'>
            {imagenes.map((i) => {
              return (
                <Imagenes 
                  nombre={i.nombre}
                  img={i.img}
                  key={i.nombre}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
