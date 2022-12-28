import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import {Profile} from './Profile';
import { Contact } from './Contact';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';


export default function App() {
const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <BrowserRouter>
        <div>
        <nav>
          <Link to={'/'}> Home </Link>
          <Link to={'/profile'}> Profile </Link>
          <Link to={'/contact'}> Contact </Link>
        </nav>
      </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
