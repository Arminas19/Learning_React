import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        console.log("IncreaseCount has been clicked");
        setCount(count + 1);
    }

    const DecreaseCount = () => {
        console.log("DecreaseCount has been Clicked");
        setCount(count - 1);
    }

    const ZeroCount = () => {
        console.log("ZeroCount has been Clicked");
        alert("ZeroCount has been clicked");
        setCount(0);
    }

  return (
    <div className='App'>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
        <button onClick={ZeroCount}>Set to zero</button>
        <br />
        {count}
    </div>
  )
}
