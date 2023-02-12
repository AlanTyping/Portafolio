import React from 'react';

import Info from './Info.js';

import mob3 from './img/mob3.png';
import email from './img/email.png';
import linkedin from './img/linkedin.png';
import instagram from './img/instagram.png';
import github from './img/github.png';
import whatsapp from './img/whatsapp.png';

export default function Contacto() {

  const info = [
    {
      nombre: 'Email',
      img: email,
      link: 'mailto:alan.a.n.r.ar@gmail.com'      
    },
    {
      nombre: 'Github',
      img: github,
      link: 'https://github.com/AlanTyping'   
    },
    {
      nombre: 'Whatsapp',
      img: whatsapp,
      link: 'https://api.whatsapp.com/send?phone=541138235395'     
    },
    {
      nombre: 'IG',
      img: instagram,
      link: 'https://www.instagram.com/alan_anr/'      
    },
    {
      nombre: 'Linkedin',
      img: linkedin,
      link: 'https://www.linkedin.com/in/alan-rosales-2b25a4209/'      
    },
  ]

  return (
    <>
      <section id='contacto' className='h-screen w-full flex bg-[#00a2ff] justify-center items-center bg-cover bg-center'
        style={{ "backgroundImage": `url(${mob3})` }}>
        <div id='icon-container' className='max-w-[400px] min-w-[300px] h-[80%] rounded-[30px] p-[20px] bg-[rgba(0,0,0,0.6)]
        text-white flex flex-col text-[1.5rem] items-center text-center justify-evenly'>
          <h1 id='contact-title' className='Fjalla-One text-[2rem]'>Contact me</h1>
          <div className='w-[70%] h-[90%] flex justify-evenly items-center flex-wrap'>
            {info.map((i) => {
              return (
                <Info
                  nombre={i.nombre}
                  img={i.img}
                  link={i.link}
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
