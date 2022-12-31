import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';

export default function Home() {
    const username = useSelector((state: any) => state.user.value.username);
  return (
    <div className='App'>
        Home
        <h1> User: {username} </h1>
    </div>
  )
}
