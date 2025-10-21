import { useSelector, useDispatch } from "react-redux"
import { clearSelectedTodo } from "../features/todo/todoSlice"
import { X } from "lucide-react"

const DetailedTodo = () => {
  const dispatch = useDispatch()
  const { selectedTodo } = useSelector(state => state.todo)

  if (!selectedTodo) return null // কিছু না সিলেক্ট করলে aside দেখাবে না

  return (
    <aside className="w-[300px] bg-gray-100 rounded-md p-4 transition-all shadow">
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

        {selectedTodo.description && (
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {selectedTodo.description}
          </p>
        )}
      </div>
    </aside>
  )
}

export default DetailedTodo
