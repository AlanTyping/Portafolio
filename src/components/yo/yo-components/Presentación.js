import React from 'react';
import mob1 from '../img/mob1.png';
import mob2 from '../img/mob2.png';
import piano from '../img/piano.jpg';
import cubo from '../img/cubo.jpg';
import aicube from '../img/aicube.png';
import ia from '../img/ia.png';


export default function Presentación() {
    return (
        <section id='sobre-mí' className='h-screen w-[100%] bg-[rgba(0,0,0,0.5)] flex justify-center items-center bg-cover bg-center'>
            <div className='w-[80%] presentacion h-[80%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.6)]
             text-white flex items-center flex-col text-[1.5rem] justify-evenly'>
                <h1 className='Fjalla-One text-[2rem] title-query'>About me 🪐</h1>
                <p className='Nunito-Sans query'>
                    I'm a 18 years old guy. Constantly setting differents goals
                    just by thinking into projects that i consider to be
                    interesting. So, i can optimize my learning process just by actually learning
                    the stuff that i need in order to persue my goals.
                </p>
                <p className='Nunito-Sans query'>
                    Speaking a bit about me, occasionally, i go out for a run.
                    Often, i interact with people throw differents comunities and that helps me 
                    to be more socially active and learn new stuff at the time of providing some value. I also like playing piano
                    and solve the rubik's cube, i think that those and also programming, are my main hobbies. 
                </p>
            </div>
        </section>
    )
}
