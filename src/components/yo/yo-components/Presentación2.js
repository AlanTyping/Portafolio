import React from 'react';
import mob1 from '../img/mob1.png';
import mob2 from '../img/mob2.png';
import aicube from '../img/aicube.png';
import ia from '../img/ia.png';

export default function Presentación2() {
    return (
        <>
            <section className='h-screen w-[100%] flex justify-center items-center bg-[] bg-cover bg-center'
                style={{ "backgroundImage": `url(${mob2})` }}>
                <div className='w-[80%] presentacion h-[80%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.7)]
             text-white flex items-center flex-col text-[1.5rem] justify-evenly'>
                    <h1 className='Fjalla-One text-[2rem] title-query'>Descripción 2/2</h1>
                    <p className='Nunito-Sans query'>
                        Me conecto a diario a comuinidades de programación para interactuar con otros desarrolladores, y
                        mi objetivo actual es insertarme en el sector laboral para poder aprender a trabajar con un equipo
                        de forma totalmente profesional, y además, ver cómo funciona y cuáles son las necesidades de la industria.
                    </p>
                    <p className='Nunito-Sans query'>
                        Por último, me parece importante destacar que estoy disponible tanto de forma presencial (siempre y
                        cuando se dé dentro de Buenos Aires y me quede cómodo con el recorrido), como de forma remota.
                        Aunque admito, que preferiría empezar mi camino de forma presencial, para poder aprender y
                        comunicarme mejor con el equipo.
                    </p>
                </div>
            </section>
        </>
    )
}
