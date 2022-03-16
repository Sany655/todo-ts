import React, { useState } from "react";
import InputField from "./components/InputField";
import Todos from "./components/Todos";
import { TodosModel } from "./models/Todos";

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<TodosModel[]>([])

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()

    if (todo.length > 0) {
      setTodos([...todos, {
        id: new Date().toLocaleString(),
        todo: todo,
        isDone: false
      }])
      setTodo("")
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">Taskify</h1>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <Todos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
