import React from 'react';
import './App.css';
import { useCounter } from './useCounter';

export default function App() {
const [ plusNumber, SubNumber, resetNumber, number] = useCounter();

  return (
    <div className='App'>
        <button onClick={plusNumber}> + </button>
        <button onClick={SubNumber}> - </button>
        <button onClick={resetNumber}> reset </button>
       <h2>  {number}   </h2>
    </div>
  );
};
