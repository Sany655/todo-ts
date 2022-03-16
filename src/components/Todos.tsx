import React from 'react'
import { TodosModel } from '../models/Todos'
import Todo from './Todo'

interface Props {
    todos: TodosModel[],
    setTodos: React.Dispatch<React.SetStateAction<TodosModel[]>>
}

function Todos({ todos, setTodos }: Props) {


    function handleDelete(id: string) {
        setTodos(todos.filter(todo => id!==todo.id));
    }

    function handleEdit(id:string,todoInput:string) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: todoInput } : todo ))
    }

    function handleDone(id:string) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo ))
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {
                    todos.map(todo => (
                        <Todo handleDone={handleDone} key={todo.id} todo={todo.todo} id={todo.id} isDone={todo.isDone} handleDelete={handleDelete} handleEdit={handleEdit}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos