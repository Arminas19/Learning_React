import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState('');

  const handleChange = (event) => {
    setnewTask(event.target.value);
  }

  const addTask = () => {
    const newtodoList = [...todoList, newTask];
    setTodoList(newtodoList);
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if(task === taskName){
        return false
      }
      else {
        return true
      }
      // retrun task !== taskName  'also works'.
    });
    setTodoList(newTodoList);
  }
  return (
    <div className='App'>
        <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button>
        </div>
        <div className='list'>
        {todoList.map((task) => {
          return <div>
            <h1> {task} </h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>;
        })}
        </div>
    </div>
  )
}
