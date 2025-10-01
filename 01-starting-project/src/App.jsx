
import {useState} from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import {EXAMPLES} from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log("App Hello World "+ selectedButton);
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
           <TabButton buttonClicked={()=> handleSelect('components')}>Components</TabButton>
           <TabButton buttonClicked={()=> handleSelect('jsx')}>JSX</TabButton>
           <TabButton buttonClicked={()=> handleSelect('props')}>Props</TabButton>
           <TabButton buttonClicked={()=> handleSelect('state')}> State</TabButton>
          </menu>
          {selectedTopic}
         
          {!selectedTopic && (
            <div id="tab-content">             
              <p>"Please select a tab"</p>            
            </div>
          )}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>{EXAMPLES[selectedTopic].code}</pre>
            </div>
          )}

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
