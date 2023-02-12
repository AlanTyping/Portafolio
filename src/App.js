import './App.css';
import Nav from './components/nav';
import Contacto from './components/contacto/Contacto';
import Projects from './components/proyects/Projects';
import Inicio from './components/inicio/Inicio';
import Yo from './components/yo/Yo'

function App() {
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <Nav />
      <Inicio />
      <Yo />
      <div className='h-[100vh] w-[100%] animation'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Projects />
      </div>
      <Contacto />
    </div>
  );
}

export default App;
