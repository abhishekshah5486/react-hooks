import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import AddToCart from './Components/AddToCart/AddToCart';
import Effect from './Components/Effect/Effect';

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
        <AddToCart 
          inputV = {inputV}
        />
        <Effect />
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

// Interview Question : What is a controlled component ?
// Controlling the input and output at the same time is called controlled component

// useEffect(callback fn, [])
// [] - dependency array, state variables can only be passed in the dependency array
// Takes 2 parameters - callback fn and an array