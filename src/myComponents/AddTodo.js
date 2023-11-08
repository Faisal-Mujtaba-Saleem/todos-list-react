import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be blank")
        } else {
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="todo-title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="todo-title" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your Todos with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="todo-desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="todo-desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
