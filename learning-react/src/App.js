import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function App() {
    const [catFact, setCatFact] = useState('');

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((response) => {
            setCatFact(response.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact();
    }, []);

  return (
    <div className='App'>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p> {catFact} </p>
    </div>
  );
}
