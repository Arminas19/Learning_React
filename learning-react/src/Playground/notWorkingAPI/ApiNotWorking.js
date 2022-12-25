import {useState} from 'react';
import Axios from 'axios';
import './App.css';

export default function App() {
    const [excuse, setexcuse] = useState('')

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((response) => {
            setexcuse(response.data[0].excuse);
        });
           
    };

    return (
        <div className='App'>
        <h1> Generate Excuse </h1>
        <button onClick={() => fetchExcuse("party")}>Party</button>
        <button onClick={() => fetchExcuse("office")}>Office</button>
        <button onClick={() => fetchExcuse("family")}>Family</button>

        <p> {excuse} </p>
    </div>
  );
}

