import React from 'react';
import mob1 from '../img/mob1.png';
import mob2 from '../img/mob2.png';
import piano from '../img/piano.jpg';
import cubo from '../img/cubo.jpg';
import aicube from '../img/aicube.png';
import ia from '../img/ia.png';


export default function Presentación() {
    return (
        <section id='sobre-mí' className='h-screen w-[100%] flex justify-center items-center bg-cover bg-center'
        style={{"backgroundImage": `url()`}}>
            <div className='w-[80%] h-[80%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.7)]
             text-white flex items-center flex-col text-[1.5rem] justify-evenly'>
                <h1 className='Fjalla-One text-[2rem]'>Descripción 1/2</h1>
                <p className='Nunito-Sans'>
                    Soy de Merlo (Buenos Aires) y tengo 18 años. <br />
                    Aunque suene general, me gusta aprender y progresar constantemente, por lo que estoy, y seguiré,
                    actualizando mi portafolio con nuevos proyectos y/o skills que se me vengan a la mente.
                </p>
                <p className='Nunito-Sans'>
                    Soy una persona disciplinada y estoy constantemente poniendome objetivos en diferentes áreas,
                    que siempre cumplo o me esfuerzo por cumplir. El hecho de alcanzarlos, me motiva a seguir avanzando
                    y ponerme objetivos cuyos requerimientos (en cuanto a los conocimientos y/o habilidades se refiere) son
                    cada vez más exigentes y me permiten progresar o aprender.
                </p>
            </div>
        </section>
    )
}
