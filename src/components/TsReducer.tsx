import React, { useCallback, useReducer, useRef } from 'react'

function TsReducer() {
    interface Todo {
        id: number,
        text: string
      }
    
      type ActionType = {
        type: "add";
        text: string;
      } | {
        type: "remove";
        id: number
      }
      const reducer = (state: Todo[], action: ActionType) => {
        switch (action.type) {
          case "add":
            return [
              ...state,
              {
                id: state.length ? state[state.length-1].id + 1 : 1,
                text: action.text
              }
            ]
            break;
          case "remove":
            return state.filter(todo => todo.id !== action.id)
            break;
        }
      }
      const [todos, dispatch] = useReducer(reducer, [])
      const inputRef = useRef<HTMLInputElement>(null);
      const onAddTodo = useCallback(
        () => {
          if (inputRef.current) {
            dispatch({
              type: "add",
              text: inputRef.current.value
            })
            inputRef.current.value = "";
          }
        },
        [],
      )
    
      return (
        <div className="App">
          <input type="text" ref={inputRef} /> <button onClick={onAddTodo}>Add</button>
          {
            todos.map(todo => (
              <div key={todo.id}>{todo.text} <button onClick={() => dispatch({ type: "remove", id: todo.id })}>Delete</button></div>
            ))
          }
        </div >
      );
}

export default TsReducer