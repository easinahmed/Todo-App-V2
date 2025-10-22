import { useDispatch, useSelector } from "react-redux";
import { clearSelectedTodo, removeTodo } from "../features/todo/todoSlice";
import { X } from "lucide-react";

const DetailedTodo = () => {
  const dispatch = useDispatch();
  const { selectedTodo } = useSelector((state) => state.todo);

  if (!selectedTodo) return null;

  return (
    <aside className="w-[360px] bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Task:</h2>
        <button
          onClick={() => dispatch(clearSelectedTodo())}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Task Title */}
      <input
        type="text"
        value={selectedTodo.text}
        readOnly
        className="w-full bg-slate-100 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 font-medium focus:outline-none"
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        value={selectedTodo.description || ""}
        readOnly
        className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 mt-3 text-gray-700 h-24 resize-none focus:outline-none"
      />

      {/* List + Due Date + Tags */}
      <div className="mt-5 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">List</label>
          <select
            value={selectedTodo.list || "Personal"}
            readOnly
            disabled
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Due Date</label>
          <input
            type="date"
            value={selectedTodo.dueDate || ""}
            readOnly
            disabled
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {(selectedTodo.tags || ["Tag 1"]).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
            <button
              disabled
              className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-lg cursor-not-allowed"
            >
              + Add Tag
            </button>
          </div>
        </div>
      </div>

      {/* Subtasks */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Subtasks:</h3>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="text-xl font-bold">+</span> Add New Subtask
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input type="checkbox" disabled className="w-4 h-4" />
          <span className="text-gray-700">Subtask</span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-8 border-t border-gray-200 pt-4">
        <button
          onClick={() => {
            dispatch(removeTodo(selectedTodo.id));
            dispatch(clearSelectedTodo());
          }}
          className="bg-gray-100 cursor-pointer text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Delete Task
        </button>

        <button
          disabled
          className="bg-yellow-400 cursor-pointer text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Edit Task
        </button>
      </div>
    </aside>
  );
};

export default DetailedTodo;
