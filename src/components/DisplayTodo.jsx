import React from 'react'
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTodo } from '../features/todo/todoSlice'

const DisplayTodo = () => {
  const { todos } = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(setSelectedTodo(todos))}>
      {todos.length === 0 && <p className='text-slate-500'>No todos yet.</p>}
      {todos.map((t) => (
        <TodoList key={t.id}  todo={t} />
      ))}
    </div>
  )
}

export default DisplayTodo