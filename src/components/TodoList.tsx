import React from 'react'
import { Todo } from '../model'
import TodoListItem from './TodoListItem'

interface Props {
    todo:string;
    todos: Todo[];
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todo, setTodos, setTodo, todos}) => {

  return (
    <div>{todos.map((t:Todo) => <TodoListItem todo={t} todos={todos} setTodos={setTodos}/> )}</div>
  )
}

export default TodoList