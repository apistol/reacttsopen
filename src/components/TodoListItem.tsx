import React from 'react'
import { Todo } from '../model'

interface Props {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoListItem:React.FC<Props> = ({todo, setTodos, todos}) => {

  const handleDelete = () => {
    const filteredTodos =  todos.filter((t:Todo) => t.id !== todo.id)
    setTodos(filteredTodos)
  }

  return (
    <div>{todo.id} | {todo.todo} | {todo.isDone ? "Done" : "TBD"} <button onClick={handleDelete}>Delete todo</button></div>
  )
}

export default TodoListItem