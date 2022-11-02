import React, { useState } from 'react'
import { Todo } from '../model'

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoListItem: React.FC<Props> = ({ todo, setTodos, todos }) => {

  const [showEdit, setShowEdit] = useState(false)
  const [valueToBeUpdated, setValueToBeUpdated] = useState("")

  const handleDelete = () => {
    const filteredTodos = todos.filter((t: Todo) => t.id !== todo.id)
    setTodos(filteredTodos)
  }

  const handleCheck = (id: number) => {
    const parsedTodos = todos.map((t: Todo) => {
      if (t.id === id) {
        return { ...t, isDone: !t.isDone }
      } else {
        return t
      }
    })
    setTodos(parsedTodos)
  }

  const handleUpdate = () => {
    const parsedTodos = todos.map((t: Todo) => {
      if (t.id === todo.id) {
        return { ...t, todo: valueToBeUpdated }
      }else{
        return t
      }
    })
    setTodos(parsedTodos)
    setShowEdit(false)
  }

  return (
    <div>{todo.id} | {todo.todo} | {todo.isDone ? "Done" : "TBD"}
      <button onClick={handleDelete}>Delete todo</button>
      <button onClick={() => handleCheck(todo.id)}>{todo.isDone ? "Completed" : "Mark as undone"}</button>
      <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      {showEdit && <div>
        <input value={valueToBeUpdated} onChange={(e: React.BaseSyntheticEvent) => setValueToBeUpdated(e.target.value)} type="text" />
        <button onClick={handleUpdate}>Update Todo</button>
      </div>}
      <br />
      <br />
    </div>
  )
}

export default TodoListItem