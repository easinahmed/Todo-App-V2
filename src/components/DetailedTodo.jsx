import { useSelector, useDispatch } from "react-redux"
import { clearSelectedTodo, removeTodo, isEdit } from "../features/todo/todoSlice"
import { X } from "lucide-react"

const DetailedTodo = () => {
  const dispatch = useDispatch()
  const { selectedTodo } = useSelector(state => state.todo)
  
  if (!selectedTodo) return null 

  return (
    <aside className="w-[300px] bg-gray-100 rounded-md p-4 shadow transition-all">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Task Details</h2>
        <button
          onClick={() => dispatch(clearSelectedTodo())}
          className="text-slate-500 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <p>
          <span className="font-semibold text-black">Title:</span>{" "}
          {selectedTodo.text}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          {selectedTodo.isComplete ? (
            <span className="text-green-600 font-medium">Completed</span>
          ) : (
            <span className="text-yellow-600 font-medium">Pending</span>
          )}
        </p>
      </div>

      <button
        onClick={() => dispatch(isEdit(selectedTodo.id))}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Edit Task
      </button>

      <button
        onClick={() => {
          dispatch(removeTodo(selectedTodo.id))
          dispatch(clearSelectedTodo())
        }}
        className="mt-2 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
      >
        Delete Task
      </button>
    </aside>
  )
}

export default DetailedTodo
