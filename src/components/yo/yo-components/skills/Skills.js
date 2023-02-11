import Link from './Link.js'

import React from 'react';
import react from './img/react.png';
import js from './img/js.png';
import git from './img/git.png';
import github from './img/github.png';
import html from './img/html.png';
import tailwind from './img/tailwind.png';
import css from './img/css.png';
import fondo from './img/fondo.png';
import mob3 from './img/mob3.png';
import skills from './img/skills.jpg';

export default function Skills() {

    const imagenes = [
        {
            name: 'Tailwind',
            img: tailwind,
            link: 'https://tailwindcss.com/'
        },
        {
            name: 'Git',
            img: git,
            link: 'https://git-scm.com/'
        },
        {
            name: 'Github',
            img: github,
            link: 'https://github.com/'
        },
        {
            name: 'React',
            img: react,
            link: 'https://reactjs.org/',
            react: 'react'
        },
        {
            name: 'Java Script',
            img: js,
            link: 'https://g.co/kgs/uvRiha'
        },
        {
            name: 'CSS',
            img: css,
            link: 'https://g.co/kgs/4UXJ3s'
        },
        {
            name: 'HTML',
            img: html,
            link: 'https://g.co/kgs/9GtZvU'
        },
    ]

    return (
        <>
            <section className='h-screen w-[100%] flex justify-center items-center bg-cover bg-center'
                style={{ "backgroundImage": `url(${skills})` }}>
                
                    <div className='max-w-[400px] min-w-[300px] max-h-screen h-[85%] rounded-[30px] p-[30px] bg-[rgba(0,0,0,0.7)]
                 text-white flex flex-col text-[1.5rem] text-center justify-evenly'>
                        <h1 className='Fjalla-One text-[2rem]'>Skills</h1>
                        <div className='w-[100%] h-[90%] flex justify-evenly items-center flex-wrap'>
                            {imagenes.map((i) => {
                                return (
                                    <Link
                                        key={i.name}
                                        link={i.link}
                                        img={i.img}
                                        name={i.name}
                                        react={i.react}
                                    />
                                )
                            })}
                        </div>
                    </div>
            </section>
        </>
    )
}
