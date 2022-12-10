import React from 'react';
import nieve from './images/nieve.jpg';
import ojo from './images/ojo.jpg';
import ojo2 from './images/ojo2.jpg';
import alan from './images/alan.jpg';
export default function Inicio() {
  return (
    <>
      <section id='inicio' className='h-screen w-[100%] flex justify-center items-center bg-center bg-cover bg-no-repeat'>
        <div className='w-full h-[500px] border-b-[20px] border-[orange] flex justify-center items-center absolute top-0 bg-center bg-cover' 
        style={{"backgroundImage": `url(${ojo})`}}>
          <div className={`w-[100%] h-[100%] justify-evenly flex justify-center items-center bg-[rgba(0,0,0,0.60)] text-white flex-col`}>
            <div className='w-full h-[200px] flex justify-center text-center flex-col'>
              <h1 className='inicio-h1 text-[4rem] Fjalla-One'>ALAN ROSALES</h1>
              <h2 className='inicio-h2 text-[2.5rem] text-[#82c9f1]'>FRONT-END DEVELOPER</h2>
            </div>
            <div 
              className='min-h-[200px] min-w-[200px] rounded-[10%] border-[4px] bg-center bg-cover bg-no-repeat' 
              style={{"backgroundImage": `url(${alan})`}}>
            </div>
          </div>
        </div> 
      </section>
    </>
  )
}
