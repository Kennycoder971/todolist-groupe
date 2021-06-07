import React, { useState } from 'react'

export default function TodoForm({ addTodo, handleError }) {
    const [inputVal, setInputVal] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (inputVal) {
                addTodo(inputVal)
                handleError('')
            } else {
                handleError('Veuillez renseigner ce champ')
            }
            setInputVal('')

        }}>
            <input type="text" placeholder='Add todo' value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <button className='btn' >Ajouter </button>
        </form>
    )
}
