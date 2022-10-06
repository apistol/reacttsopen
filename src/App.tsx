
import React, {useState} from 'react'
import {Todo} from "./model"

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todos)

  return (
    <div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} type="text" />
      <button onClick={() => {setTodos([...todos, { id: Date.now(), todo:todo, isDone:false}])}}>Add</button>

      <div>
        {todos.map((t:Todo) => (<p>
          {t.todo}
        </p>))}
      </div>
    </div>
  );
}

export default App;


