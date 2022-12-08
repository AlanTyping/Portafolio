import './App.css';
import Nav from './components/nav';
import Contacto from './components/contacto/Contacto';
import Proyects from './components/proyects/Proyects';
import Inicio from './components/inicio/Inicio';
import Yo from './components/yo/Yo'
import Animacion from './components/Animacion';

function App() {
  return (
      <div className='flex justify-center items-center flex-col w-full '>
        <Nav />
        <Inicio />
        <Proyects />
        <Yo /> 
        <Contacto />
      </div>
  );
}

export default App;
