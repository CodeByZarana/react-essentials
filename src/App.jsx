//Creating a custom component:
//It is created in the same way as a javascript function just that it contains html code
//to add image into the file:
//importing the data to be put into props from data.js
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

//now we have to use the header component although it is not called like a regular function by the coder,
//React takes care of the calling and the execution.

//Making use of the concept called props. They are used when the same component is used but with different data.


//The above component gets an argument as a props object from the App() function with different values each time it is called and used.

function App() {
//The above hook takes the value of selectedButton and sets it to selectedTopic.
//useState(This takes the value that is there before the page gets reloaded.)
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
/*
  <CoreConcept {...CORE_CONCEPTS[INDEX NUMBER]}/>
  The above syntax is alternate and can be used if the props names are same as the 
  data that is being passed to the component and hence making it a shorter index.
*/
/* In the main App(), we have a <div> that wraps up the children. Instead we can use Fragments so as to not
 * have the unnecessary redundant div!
 */
//Basically, make the App() component leaner by separating all the components.