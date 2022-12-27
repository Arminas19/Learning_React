import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import {Profile} from './Profile';
import { Contact } from './Contact';


export default function App() {

  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
