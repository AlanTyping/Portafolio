import './App.css';
import Nav from './components/nav';
import Contacto from './components/contacto/Contacto';
import Proyects from './components/proyects/Proyects';
import Inicio from './components/inicio/Inicio';
import Yo from './components/yo/Yo'

function App() {

  //1

  // const sheepsAndThings = [
  //   true, true, false, true, true
  // ,undefined, false, true, false, null,
  //  true, true, true, false, true,
  //  true, true, true, true, true,
  //  true, true, true ];

  // const sheeps = sheepsAndThings.filter((e) => e === true);






  //2


 const string = "la rata volvió de la alcantarilla agarró el sombrero y se fue volando";
 const number = 4
  
  // "STRING = 'XXI' "
// CONST SPLITTED = STRING.SPLIT('') = ['X', 'X', 'I'];
// SPLITTED.MAP((LETTER) => {
// LET NUMBER = 0;
//    IF (LETTER === 'X') {
//        NUMBER = 1000
//    }
//  RETURN NUMBER
//})
  
  // const toNumericalValue = (string) => {
  //   const splitted = string.split('')
  //   const map = splitted.map((letter) => {
  //     if (letter === 'M') {
  //       letter = 1000
  //     }
  //     if (letter === 'D') {
  //       letter = 500
  //     }
  //     if (letter === 'C') {
  //       letter = 100
  //     }
  //     if (letter === 'L') {
  //       letter = 50
  //     }
  //     if (letter === 'X') {
  //       letter = 10
  //     }
  //     if (letter === 'V') {
  //       letter = 5
  //     }
  //     if (letter === 'I') {
  //       letter = 1
  //     }
  //     return letter
  //   })
  //   return map
  // }
 
  // const numericalValues = toNumericalValue('MDCLXVI')
  // const redux = numericalValues.reduce((a, n) => {
  //   return a += n
  // })
  
  // console.log(redux)


  const toNumericalValue = (string) => {
    return string.split('').map((letter, index) => {
      if (letter === 'M') {
        letter = 1000
      }
      if (letter === 'D') {
        letter = 500
      }
      if (letter === 'C') {
        letter = 100
      }
      if (letter === 'L') {
        letter = 50
      }
      if (letter === 'X') {
        letter = 10
      }
      if (letter === 'V') {
        if (string[(index - 1)] === 'I') {
          letter = 3
        } else {
          letter = 5 
        }
      }
      if (letter === 'I') {
        letter = 1
      }
      return letter
    }).reduce((a, n) => {
      return a += n
    })
  }
  
  console.log(toNumericalValue('MMIV'))

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
