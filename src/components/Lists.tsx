import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import List from './List';

function Lists() {
    // const [todos, setTodos] = useState([])
    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/todos').then(res => setTodos(res.data)).catch(error => console.log(error));
    // }, [])
    // const deleteTodo = (id: number): void => {
    //     alert(id)
    // }

    return (
        <div>
            {/* {todos.map((todo: Todo, index: number) => {
                return <List key={index} todo={todo} deleteTodo={deleteTodo} />
            })} */}
            {/* <List todo={"a"} deleteTodo={deleteTodo} /> */}
        </div>
    )
}

export default Lists