import './App.css';



function functions() {
const age = 19;
const isGreen = true;

    // Incorrect way of using a if else statement in React.jsx
    // if (age >= 18) {
    //     return <div className='App'>
    //     <h1 className='name'> Over Age </h1>
    //   </div>
    // }
    //   else {
    //     return <div className='App'>
    //     <h1 className='name'> Under Age </h1>
    //   </div>
    // }

    // Correct method of using a if else statement
    return (
        <div className='App'>
            {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
            <h1 style={{color: isGreen ? 'green' : 'red', backgroundColor: 'black'}}> THIS HAS COLOR </h1>

            { isGreen && <button type='submit'> Green is true </button>}
        </div>
    );

}


export default functions;