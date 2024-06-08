import { useEffect, useRef, useState } from 'react';
import './Effect.css';

function Effect(){
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);
    const bRef = useRef(0);

    console.log("re-rendered");
    useEffect(function(){
        console.log("Mounted");
    },[count, count1]);
    function displayOutputCount(){
        setCount(count + 1);
    }
    function displayOutputCount1(){
        setCount1(count1 - 1);
    }
    return (
        <div>
            <button ref={bRef} onClick={displayOutputCount}>ClickMe</button>
            <p>{count}</p>
            <button onClick={displayOutputCount1}>ClickMe</button>
            <p>{count1}</p>
        </div>
    );
}

export default Effect;


// When an empty dependency array is passed, the callback fn is called only once during mounting 