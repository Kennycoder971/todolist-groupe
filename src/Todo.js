import React from 'react'

export default function Todo({ title, removeTodo, todoIndex }) {
    return (
        <li>
            {title}&nbsp;&nbsp;
            <button onClick={() => removeTodo(todoIndex)}>remove</button>
        </li>
    )
}
