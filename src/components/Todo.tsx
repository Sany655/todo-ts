import React, { useEffect, useRef, useState } from 'react'
import { TodosModel } from '../models/Todos'
import InputField from './InputField'

interface SingleTodo extends TodosModel {
    handleDelete: (id: string) => void,
    handleEdit: (id: string, todo: string) => void,
    handleDone: (id: string) => void,
}

function Todo({ todo, handleDelete, id, isDone, handleEdit, handleDone }: SingleTodo) {
    const [todoInput, setTodoInput] = useState(todo)
    const [edit, setEdit] = useState(false)
    const todoInputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        todoInputRef.current?.focus()
    },[edit])

    return (
        <div className="card my-2">
            <div className="card-body">
                {
                    edit ? (
                        <input
                            ref={todoInputRef}
                            type="text"
                            className="form-control"
                            value={todoInput}
                            onChange={e => setTodoInput(e.target.value)}
                        />
                    ) : (
                        isDone ? <p className="card-text text-decoration-line-through">{todo}</p> : <p className="card-text">{todo}</p>
                    )
                }
                <button className="btn btn-sm btn-info me-2" onClick={() => handleDone(id)}>{isDone ? "Not Done" : "Done"}</button>
                {
                    edit ? (
                        <button className="btn btn-sm btn-warning me-2" onClick={() => {
                            handleEdit(id, todoInput);
                            setEdit(false);
                        }}>Update</button>) : (
                        <button className="btn btn-sm btn-warning me-2" onClick={() => {
                            setEdit(true);
                        }}>Edit</button>
                    )
                }
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(id)}>delete</button>
            </div>
        </div>
    )
}

export default Todo