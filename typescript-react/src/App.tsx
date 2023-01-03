import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Main } from './pages/main-page/main';
import { Login } from './pages/login';
import { Nav } from './components/nav';
import Posts from './pages/posts';

export default function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/posts' element={<Posts/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
