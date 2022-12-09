import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
 return (
    <>
    <BrowserRouter>
      <nav id='nav' 
      className='h-[45px] bg-[#00a2ff] text-white fixed bottom-[20px] w-[95%] max-w-[400px] min-w-[300px] flex justify-center
      justify-around items-center rounded-[20px] z-10 border-[2px]'>
        <div className='h-full'><Link to='#inicio' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Inicio</h4></Link></div>
        <div className='h-full'><Link to='#proyectos' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Proyectos</h4></Link></div>
        <div className='h-full'><Link to='#sobre-mí' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>info</h4></Link></div>
        <div className='h-full'><Link to='#contacto' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Contacto</h4></Link></div>
      </nav>
    </BrowserRouter>
    </>
  )
}
                                                                                                                        