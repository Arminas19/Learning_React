import './App.css';
import { useToggle } from './useToggle';

export default function App() {
const [inVisible, toggle] = useToggle()
  return (
    <div className='App'>
        <button onClick={toggle}>
          {inVisible ? "Hide" : "Show"}
        </button>
        {inVisible && <h1> Hidden text </h1>}
    </div>
  );
};
