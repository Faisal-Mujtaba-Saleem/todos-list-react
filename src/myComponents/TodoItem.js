import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div>
            <h4>
                {todo.sno}.
                <span className='mx-1'>
                    {todo.title}
                </span>
            </h4>
            <p>
                {todo.desc}
            </p>
            <button className="btn btn-danger btn-sm" onClick={() => { onDelete(todo) }}>Delete.</button>
        </div>
    )
}

