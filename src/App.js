import { useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TaskList from './components/TaskList'
import './App.css'

const App = props => {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: 'Your task may be here...',
      isDone: true,
      createdAt: new Date()
    }
  ])

  const addTask = values => {
    const newTodo = {
      body: values.todo,
      id: Date.now(),
      isDone: true,
    };
    setTodoArray([...todoArray, newTodo]);
  };

  const deleteTask = id => {
    const filteredTodos = todoArray.filter(
      currentTask => currentTask.id !== id
    );
    setTodoArray(filteredTodos);
  };
  
  return (
    <div className='container'>
      <TodoHeader />
      <TodoInput onSubmit={addTask} />
      <TaskList todoArray={todoArray} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
