import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }
    return(
        <Section id='examples' title='Examples'>
          
          <menu>
            <TabButton isSelected = {selectedTopic==='components' } onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic==='jsx' }onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic==='props' }onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic==='state' }onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
          </div>
        </Section>
    )
}
/**
 * TabButton and Examples can be wrapped in a container component and for that handling the button click
 * could be done in a way and the whole jsx code can be passed as a prop to the Tab component. For code, see the 
 * github code of the course.
 */