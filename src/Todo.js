import React from 'react'

export default function Todo({ title, removeTodo, todoIndex }) {
    return (
        <li>
            {title}&nbsp;&nbsp;
            <button className='todo-btn' onClick={() => removeTodo(todoIndex)}>Effacer</button>
        </li>
    )
}
