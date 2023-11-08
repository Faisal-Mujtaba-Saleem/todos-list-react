import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    const todosStyle = {
        minHeight: '50vh',

    }
    return (
        <div className='container my-4' style={todosStyle}>
            <h3 className='my-3'>Todos List</h3>

            {
                props.todos.length === 0 ?
                    <em> no todos to display </em> :
                    props.todos.map((todo) => {
                        return (
                            <>
                                <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
                                <hr />
                            </>
                        )

                    })

                // Personal Practice :
                // props.todos.map((todo) => {
                //     return (<div className='todos' key={todo.sno}>
                //         <h4>
                //             {todo.sno}.
                //             <span className='mx-1'>
                //                 {todo.title}
                //             </span>
                //         </h4>
                //         <p>
                //             {todo.desc}
                //         </p>
                //     </div>)
                // })
            }

        </div>
    )
}
