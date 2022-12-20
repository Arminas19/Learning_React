import React from 'react';
import { useState } from 'react';
import './todoList.css';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState('');

  const handleChange = (event) => {
    setnewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if(task.id === id){
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
        <h1 className='headerTask'> Add Task </h1>
        <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button>
        </div>
        <div className='list'>
        {todoList.map((task) => {
          return (<div className='task'>
            <h1> {task.taskName} </h1>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
          );
        })}
        </div>
    </div>
  )
}
