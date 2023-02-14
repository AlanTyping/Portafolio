import React from 'react';
import nieve from './images/nieve.jpg';
export default function Inicio() {
  return (
    <>
      <section id='home' className='h-[250px] w-[100%] home border-b-[10px] border-[var(--orange)] flex justify-center items-center bg-center bg-cover bg-no-repeat'>
        <div id='home-container' className='w-full home-container h-[240px] flex justify-center items-center absolute top-0 bg-center bg-cover' 
        style={{"backgroundImage": `url(${nieve})`}}>
          <div className={`w-[100%] h-[100%] justify-evenly p-[20px] flex justify-center items-center bg-[rgba(0,0,0,0.60)] text-white flex-col`}>
            <div className='w-full h-[200px] flex justify-center text-center flex-col'>
              <h1 className='inicio-h1 text-[3.5rem] Fjalla-One'>ALAN ROSALES</h1>
              <h2 className='inicio-h2 text-[2rem] text-[#82c9f1]'>FRONTEND DEVELOPER</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
