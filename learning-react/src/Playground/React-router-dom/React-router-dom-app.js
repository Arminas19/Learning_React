import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { Menu } from './Menu';
import { Contact } from './Contact';
import { PageNotFound } from './PageNotFound';

export default function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <div>
          <nav>
            <h1> Navbar</h1>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/contact'> Contact </Link>
            
          </nav>
        </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
