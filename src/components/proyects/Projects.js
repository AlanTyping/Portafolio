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
import SpeedCube from './images/SpeedCube.png';

// import required modules
import { EffectCreative } from "swiper";
import { EffectCards } from "swiper";

export default function Projects() {
  const cardsData = [
    {
      name: 'FLASH TYPING',
      img: typing,
      link: 'https://flashtyping.netlify.app/',
      opacity: 'opacity',
      description:
        `Typing game to test your velocity with the pc keyboard. This one, was made with react and tailwind css, and it's the project with which I learned the most so far.`
    },
    {
      name: 'Co:here AI',
      img: cohere,
      link: 'https://midu-hackaton.vercel.app/',
      description: 'Web app that uses Co:Here API and has two different sections. The first section is useful for tokenizing words, and the second one, includes a small but cool game.'
    },
    {
      name: 'Speedcube Timer',
      img: SpeedCube,
      link: 'https://speedcube-timer.vercel.app/',
      description:
        'A web app made with react, which i use in order to automatically set my solve times and then, make an average with the previous values (not for mobile yet)'
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
      <section id='proyectos' className='h-screen w-[100%] flex relative flex-col justify-center items-center text-white'>
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
