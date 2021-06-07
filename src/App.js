import React, { useState, useEffect } from 'react'
import List from './List'
import TodoForm from './TodoForm'
import './global.css'
function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [error, setError] = useState('')
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function removeTodo(todoIndex) {
    setTodos(todos.filter((todos, index) => {
      return index !== todoIndex
    }))
  }
  return (
    <div className='container'>
      <h1>Todo liste</h1>
      <TodoForm addTodo={addTodo} handleError={setError} />
      {error && <p>{error}</p>}
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
