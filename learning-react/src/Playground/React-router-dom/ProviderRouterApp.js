import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { Menu } from './Menu';
import {Profile} from './profile';
import { Contact } from './Contact';
import { PageNotFound } from './PageNotFound';
import { useState, createContext } from 'react';

export const AppContext = createContext();

export default function App() {
  const [username, setUsername] = useState('Arminas');

  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUsername}}>
        <BrowserRouter>
        <div>
          <nav>
            <h1> Navbar</h1>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/profile'> Profile </Link>
            
          </nav>
        </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    </div>
  );
}
