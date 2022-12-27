import {useState} from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState('');
    const {setUsername} = useContext(AppContext);

    const handleSubmit = () => {
        setUsername(newUsername);
    }

    return (
        <>
        <input onChange={(event) => {setNewUsername(event.target.value)}}/>
        <button onClick={handleSubmit}> Change Username </button>
        </>
    )
};