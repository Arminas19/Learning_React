import './App.css';
import { useState } from 'react';
import {login, logout} from './store';
import {useDispatch, useSelector} from 'react-redux';

export default function SignIn() {
    const [newUserName, setNewUserName] = useState('');
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

  return (
    <div className='App'>
        <h1>Login Page </h1>
        <input onChange={(event) => {setNewUserName(event.target.value)}}/>
        <button onClick={() => dispatch(login({ username: newUserName}))}> Submit Login </button>
        <button onClick={() => dispatch(logout())}> Log Out </button>
        <h1> user: {username} </h1>
    </div>
  )
}
