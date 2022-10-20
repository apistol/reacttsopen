
import React, {useState} from 'react'
import InputFields from './components/InputFields'
import TodoList from './components/TodoList'
import {Todo} from "./model"

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div>
      
      <div>
        <InputFields todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}/>
        <TodoList todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;


