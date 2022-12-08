import React from 'react';

import Presentación from './yo-components/Presentación.js';
import Presentación2 from './yo-components/Presentación2.js';
import Skills from './yo-components/skills/Skills.js';

import mob from './img/mob.jpg'
import ojo from './img/ojo.jpg';
import ojo2 from './img/ojo2.jpg';

export default function yo() {
  return (
    <>
      <div className='contenedor'>
        <Presentación />
        <Presentación2 />
        <Skills />
      </div>
    </>
  )
}
