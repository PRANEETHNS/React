import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  return ( 
        <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      );
}

function CoreConcept(props){
   return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.title}</p>
    </li>
   );
}

function App() {
  return (
    <div>     
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
              {CORE_CONCEPTS.map((concepts, indexs) => (
                <CoreConcept key={indexs} {...concepts} />
              ))}
          </ul>          
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
