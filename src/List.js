import React from 'react'
import Todo from './Todo'

export default function List({ todos, removeTodo }) {

    return (
        <ul className='list'>
            {todos.map((todo, index) => {
                return <Todo title={todo} key={index} removeTodo={removeTodo} todoIndex={index} />
            })}
        </ul>
    )
}
