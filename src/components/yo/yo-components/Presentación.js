import React from 'react';


export default function Presentación() {
    return (
        <section id='sobre-mí' className='h-screen w-[100%] bg-[rgba(0,0,0,0.35)] flex justify-center items-center bg-cover bg-center'>
            <div className='w-[80%] presentacion h-[80%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.3)]
             text-white flex items-center flex-col text-[1.5rem] justify-start justify-evenly '>
                <h1 className='Fjalla-One text-[2.4rem] title-query'>About me 🌘</h1>
                <p className='Nunito-Sans query'>
                    I'm an 18-year-old guy. Constantly setting different goals
                    just by thinking into projects that i consider to be
                    interesting. So, i can optimize my learning process by actually learning
                    the stuff that i need in order to pursue my goals.
                </p>
                <p className='Nunito-Sans query'>
                    Speaking a bit about myself, occasionally, i go out for a run.
                    Often, i interact with people through different communities and that helps me 
                    to be more socially active and learn new things while providing value. I also like playing piano
                    and solving the rubik's cube, i think that those and also programming, are my main hobbies. 
                </p>
            </div>
        </section>
    )
}
