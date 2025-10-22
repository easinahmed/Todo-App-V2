import React from 'react'
import TodoList from './TodoList'
import { useSelector } from 'react-redux'

const DisplayTodo = () => {
  const { todos } = useSelector((state) => state.todo)

  return (
    <div>
      {todos.length === 0 && <p className='text-slate-500'>No todos yet.</p>}
      {todos.map((t) => (
        <TodoList key={t.id} todo={t} />
      ))}
    </div>
  )
}

export default DisplayTodo
