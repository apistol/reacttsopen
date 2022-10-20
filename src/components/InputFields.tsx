import React from 'react'
import { Todo } from '../model';

interface Props {
  todo:string;
  todos: Todo[];
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const InputFiedls:React.FC<Props> = ({todo, setTodos, setTodo, todos}) => {

  return (
    <div>
      <input value={todo} onChange={(e:React.BaseSyntheticEvent) => {setTodo(e.target.value)}} type="text" />
      <button onClick={() => {setTodos([...todos, { id: Date.now(), todo:todo, isDone:false}])}}>Add</button>
    </div>
  )
}

export default InputFiedls