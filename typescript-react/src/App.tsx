import React from 'react';
import './App.css';
import { Person, Country } from './Person';
import {Bank} from './Bank';

export default function App() {

  // const getAge = (name: string): number => {
  //   return 99
  // }

  return (
    <div className='App'>
        <Person country={Country.Lithuania} name={'Arminas'} email={'Test@test.com'} age={21} isMarried={true} friends={['Tom', 'Bob', 'Cillian', 'Mike', 'Jim']}/>
        <Bank bank={'Bank Of Ireland'} creditCard={4768344334432121} vipmember={true} name={'Arminas'}/>
    </div>
  );
};