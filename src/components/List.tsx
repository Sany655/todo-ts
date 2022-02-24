import React from 'react'

function List({todo,deleteTodo}:{
    todo:{title:string,id:number},
    deleteTodo:(id:number)=>void;
}) {
  return (
    <div>
        <h1 onClick={()=>deleteTodo(todo.id)}>{todo.title}</h1>
    </div>
  )
}

export default List