import React, { useRef } from 'react'

type Props = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void,
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const todoInput = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={e => {
            handleAdd(e)
            todoInput.current?.blur()
        }}>
            <div className="form-group row my-5">
                <div className="col">
                    <input type="text" className="form-control" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Todo" ref={todoInput} />
                </div>
                <div className="col">
                    <button type='submit' className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default InputField