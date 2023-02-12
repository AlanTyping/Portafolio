import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
 return (
    <>
    <BrowserRouter>
      <nav id='nav' 
      className='h-[45px] bg-[#151d28] text-white fixed bottom-[20px] w-[80%] max-w-[400px] min-w-[280px] flex justify-center
      justify-around items-center rounded-[20px] z-10 border-[2px]'>
        <div className='h-full'><Link to='#inicio' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Home</h4></Link></div>
        <div className='h-full'><Link to='#sobre-mí' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>info</h4></Link></div>
        <div className='h-full'><Link to='#proyectos' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Projects</h4></Link></div>
        <div className='h-full'><Link to='#contacto' className='h-full' smooth><h4 className='cursor-pointer h-full flex rounded-[20px] hover:text-[1.1rem] items-center  font-monospace duration-[50ms]'>Contact</h4></Link></div>
      </nav>
    </BrowserRouter>
    </>
  )
}
                                                                                                                        