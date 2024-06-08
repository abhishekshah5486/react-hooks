import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputV, setInputV] = useState('');
  let pRef = useRef(0);
  let iRef = useRef(0);

  function displayOutput(){
    // let input = iRef.current.value;
    // let string = "Over here the output would appear - ";
    // pRef.current.innerText = string + input;

    setInputV(iRef.current.value);
  }
  return (
    <div className="App">
        <input ref={iRef} onChange={displayOutput} type='text'></input>
        <p ref={pRef}>Over here the output would appear - {inputV}</p>
    </div>
  );
}

export default App;


// Whenever a state variable is set,
// it would cause a re-render of the component and the value of the variable would be retained on re-render
// Mounting and Re-Render
// Mounting - When a function/component is called for the first time
// UseState accepts 2 parameters
// StateVariable and SetStateVariable
// Every time a stateVariable is set, it would cause a re-render of the component