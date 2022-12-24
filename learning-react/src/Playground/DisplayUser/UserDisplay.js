import React from 'react'
import {User} from './User';
import './App.css';

export default function App() {
    // const names = ["Arminas", "Adi", "Struna", "Timmy"];
    const users = [
        { name: "Arminas", age: 21 },
        { name: "Adi", age: 20 },
        { name: "Timmy", age: 20 }
    ];
    return (
        // <div className='App'>
        //     {names.map((name, key) => {
        //         return <h1 key={key}> {name}</h1>;
        //     })}
        // </div>
        <div className='App'>
            {users.map((user, key) => {
                return (
                    <User name={user.name} age={user.age}/>
                );
            })}
        </div>
    )
}

