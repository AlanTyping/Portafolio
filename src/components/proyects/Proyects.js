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

// import required modules
import { EffectCreative } from "swiper";
import { EffectCards } from "swiper";

export default function Proyects() {
  const cardsData = [
    {
      name: 'TRADING TEST',
      img: trading,
      secondImg: quiz,
      thirdImage: typing,
      description: 
      'Esta es una página símple (vanilla js), pero puramente personal, que creé en base a mis necesidades y que uso bastante seguido desde hace meses'
    },
    {
      name: 'FLASH TYPING',
      img: typing,
      secondImg: quiz,
      thirdImage: typing,
      opacity: 'opacity',
      description: 
      'Página de mecanografía con react y tailwind para testear qué tan rápido escribis con el teclado de la pc. Entretenido para pasar el rato'
    },
    {
      name: 'QUIZ',
      img: quiz,
      secondImg: quiz,
      thirdImage: typing,
      description: 
      'Página manimalista para probar tus conocimientos acerca de css y html con un par de pregutas básicas'
    }
  ]
  return (
    <>
      <section id='proyectos' className='h-screen w-[100%] flex justify-center items-center'>
            {/* {cardsData.map(({name, img, description}) => {
              return (
                <Cards 
                  name={name}
                  img={img}
                  description={description}
                />
              )
            })} */}
            {/* <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          // prev: {
          //   shadow: true,
          //   translate: [0, 0, -400],
          // },
          // next: {
          //   translate: ["100%", 0, 0],
          // },


          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="h-[300px] w-[600px] rounded-[30px]"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cardsData.map(({img, opacity, name, description}, index) => {
          return(
            <SwiperSlide key={index}>
                <Cards 
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
