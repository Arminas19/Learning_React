import React from 'react';
import {useState} from 'react';
import './App.css';


export default function App() {
const [color, setColor] = useState('red')
// const ChangeColor = () => {
//   {color === 'red' ? setColor('green') : setColor('red') }

// }

  return (
    <div className='App'>
        <h2 style={{color: color}}> This is Arminas </h2>
        <br/>
        <button onClick={() => {{color === 'red' ? setColor('green') : setColor('red')}}}> ChangeColor </button>
    </div>
  )
}
