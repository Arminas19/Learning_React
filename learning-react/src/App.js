import React from 'react';
import './App.css';
import { Person } from './Person';

export default function App() {
  return (
    <div className='App'>
        <Person name={'Arminas'} email={'Test@test.com'} age={21} isMarried={true} friends={['Tom', 'Bob', 'Cillian', 'Mike', 'Timmy']}/>
    </div>
  );
};
