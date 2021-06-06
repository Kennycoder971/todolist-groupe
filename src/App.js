import React, { useState, useEffect } from 'react'
import List from './List'
import TodoForm from './TodoForm'
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
    <div>
      <TodoForm addTodo={addTodo} handleError={setError} />
      {error && <p>{error}</p>}
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
