import './App.css';

function App() {
  return (
    <div className='App'>
      <h2> Company Job </h2>
      <hr></hr>
      <Job salary={90000} position="Senior Dev" company="apple" />
      <Job salary={12000} position="mid-level Dev" company="microsoft" />
      <Job salary={10000} position="Junior Dev" company="starbucks" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3> {props.position} - {props.salary} - {props.company} </h3>
      <hr style={{ maxWidth: '300px' }} />
    </div>
  )
}

export default App;
