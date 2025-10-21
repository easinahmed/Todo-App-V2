import { ArrowRight } from 'lucide-react'
import { completeTodo, setSelectedTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const TodoList = ({ todo }) => {
  const dispatch = useDispatch()

  const handleComplete = (e) => {
    e.stopPropagation(); // Prevent todo selection when toggling complete
    if (!todo) return;
    dispatch(completeTodo(todo.id))
  }

  const handleClick = () => {
    if (!todo) return;
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
        className='w-5 h-5 focus:border-none focus:outline-none border-none'
      />

      <div className='text-lg'>
        {todo?.isComplete ? <del>{todo?.text}</del> : todo?.text}
      </div>

      <div className='flex items-center gap-2'>
        <ArrowRight className='text-slate-400 font-bold' />
      </div>
    </div>
  )
}

export default TodoList