import { ArrowRight } from 'lucide-react'
import { completeTodo, setSelectedTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const TodoList = ({ todo }) => {
  const dispatch = useDispatch()

  const handleComplete = (e) => {
    e.stopPropagation()
    dispatch(completeTodo(todo.id))
  }

  const handleClick = () => {
    dispatch(setSelectedTodo(todo))
  }

  return (
    <div 
      onClick={handleClick}
      className='grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 border-b border-slate-200 rounded-md mb-4 hover:bg-slate-50 cursor-pointer transition-colors'
    >
      <input
        type='checkbox'
        checked={todo?.isComplete}
        onChange={handleComplete}
        className='w-5 h-5 cursor-pointer'
      />

      <div className='text-lg'>
        {todo?.isComplete ? <del>{todo?.text}</del> : todo?.text}
      </div>

      <ArrowRight className='text-slate-400' />
    </div>
  )
}

export default TodoList
