import './App.css';
import Nav from './components/nav';
import Contacto from './components/contacto/Contacto';
import Proyects from './components/proyects/Proyects';
import Inicio from './components/inicio/Inicio';
import Yo from './components/yo/Yo'

function App() {
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <Nav />
      <Inicio />
      <Yo /> 
      <Proyects />
      <Contacto />
    </div>
  );
}

export default App;
