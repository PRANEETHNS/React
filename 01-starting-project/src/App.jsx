
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {

  function handleSelect(){
    console.log("App Hello World");
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton buttonClicked={handleSelect}>Components</TabButton>
           <TabButton buttonClicked={handleSelect}>JSX</TabButton>
           <TabButton buttonClicked={handleSelect}>Props</TabButton>
           <TabButton buttonClicked={handleSelect}> State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
