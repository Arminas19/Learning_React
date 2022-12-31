import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SignIn from './SignIn';
import Contact from './Contact';
import Home from './Home';
import './App.css';
import { store } from './store';

export default function App() {
  return (
    <div className='App'> 
    <Provider store={store}>
    <BrowserRouter>
        <div>
          <nav>
            <h1> Navbar</h1>
            <Link to='/'> Home </Link>
            <Link to='/signin'> Sign In </Link>
            <Link to='/contact'> Contact </Link>
            <br/>
            <br/>
            <br/>
          </nav>
        </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='signin' element={<SignIn />}/>
          </Routes>
        </BrowserRouter>
        </Provider>
        </div>
  );
};
