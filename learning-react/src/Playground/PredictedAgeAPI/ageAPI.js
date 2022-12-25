import {useState, useEffect} from 'react'
import Axios from 'axios';
import './App.css';

export default function App() {
    const [age, setAge] = useState(null)
    const [name, setName] = useState("")

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((resp)=> {
            setAge(resp.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='App'>
        <input placeholder='Enter name here' onChange={(event) => {
            setName(event.target.value);
        }}/>
        <button onClick={fetchData}> Predict age </button>

        <h1> Predicted age: {age?.age} </h1>
        <h1>Name: {age?.name} </h1>
        <h1> count: {age?.count} </h1>
    </div>
  );
}
