import React from 'react'

import "swiper/css";
import "swiper/css/effect-cards";

export default function Cards({img, name, description, link, opacity}) {
  return (
    <>
    <div className={`h-full w-full flex justify-center items-center flex-col m-1`}>
        <div className='w-[80%] z-10 min-w-[200px] h-[190px] bg-center bg-contain bg-no-repeat flex justify-center fixed top-0 m-[20px]'>
          <img src={`${img}`} className='rounded-[30px] border-[2px]'></img>
        </div>
        <div className={`flex text-start rounded-[10px] proyectos w-full h-[290px] p-[30px] ${opacity} fixed top-[210px] flex-col`}>
          <h2 className='text-[2rem] Fjalla-One'>{name}</h2>
          <p className='text-[0.90rem] text-[rgb(220,220,220)]'>{description}</p>
        </div>
        <a href={link}
        className='w-full h-[70px] hover:text-[2rem] cursor-pointer link items-center p-[30px] border-t-[2px] flex absolute bottom-0' 
        target="_blanck">
            <h2 className='text-[1.6rem] Fjalla-One'>VISITAR PÁGINA</h2>
        </a>
    </div>
    </>
  )
}