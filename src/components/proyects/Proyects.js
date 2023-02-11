import React from 'react'
import Cards from './cards'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";

import trading from './images/trading.png';
import quiz from './images/quiz.png';
import typing from './images/typing.png';
import weather from './images/weather.png';
import cohere from './images/cohere.png';

// import required modules
import { EffectCreative } from "swiper";
import { EffectCards } from "swiper";

export default function Proyects() {
  const cardsData = [
    {
      name: 'FLASH TYPING',
      img: typing,
      link: 'https://flashtyping.netlify.app/',
      opacity: 'opacity',
      description:
        'Página de mecanografía con react y tailwind para testear qué tan rápido escribis con el teclado de la pc. Entretenido para pasar el rato'
    },
    {
      name: 'Co:here AI',
      img: cohere,
      link: 'https://midu-hackaton.vercel.app/',
      description: 'This, is a web app using Co:here API, with two differents sections. The first, is useful for tokenizing words, and the second, has a little but cool game'
    },
    {
      name: 'QUIZ',
      img: quiz,
      link: 'https://programming-quiz-azure.vercel.app/',
      description:
        'Página manimalista para probar tus conocimientos acerca de css y html con un par de pregutas básicas'
    },
    {
      name: 'Weather-app',
      img: weather,
      link: 'https://weather-app-opal-ten.vercel.app/',
      description:
        'Con este proyecto, pongo en práctica el llamado a una API externa. Uso axios porque me parece el mejor método'
    }
  ]
  return (
    <>
      <section id='proyectos' className='h-screen w-[100%] flex relative flex-col justify-center items-center bg-[#061f2e] text-white'>
        <div className='w-full project-cards absolute top-0 h-[60px] flex items-center justify-center m-3'>
          <h2 className='text-[2rem] title-query Fjalla-One'>Projects 🃏</h2>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {cardsData.map(({ img, opacity, name, link, description }, index) => {
            return (
              <SwiperSlide key={index}>
                <Cards
                  link={link}
                  name={name}
                  img={img}
                  description={description}
                  opacity={opacity}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}
