import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


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
