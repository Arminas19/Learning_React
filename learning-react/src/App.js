import React from 'react';
import { useState } from 'react';
import './todoList.css';
import {Task} from './Task';

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
        completed: false,
    }
    setTodoList([...todoList, task]);
  }

  const completeTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if(task.id === id && task.completed === false){
        return {
          ...task,
          completed: true
        }
      }
      else {
        return {
          ...task, 
          completed: false
        }
      }
    });
    setTodoList(newTodoList);
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
          return <Task taskName={task.taskName} id={task.id} complete={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>;
        })}
        </div>
    </div>
  )
}
