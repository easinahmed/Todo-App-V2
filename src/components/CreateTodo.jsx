import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [newTodo, setNewTodo] = useState({
    id: Date.now(),
    text: "",
    isEdit: false,
    isComplete: false,
  });

  const handleAddTodo = () => {
    const trimmed = newTodo.text.trim();

    if (!trimmed) {
      setMessage("Todo text can’t be empty");
      return;
    }

    if (trimmed.length <= 2) {
      setMessage("Text must be more than 2 characters");
      return;
    }

    dispatch(addTodo({ ...newTodo, id: Date.now() }));

    setNewTodo({
      id: Date.now(),
      text: "",
      isEdit: false,
      isComplete: false,
    });
    setMessage("");
  };

  return (
    <div className="w-full p-4 border border-slate-200 rounded-md hover:border-slate-400 transition space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          placeholder="Enter a new task..."
          className="w-full px-3 py-2 rounded-md outline-none text-slate-700"
        />

        <button
          onClick={handleAddTodo}
          className="flex items-center gap-1 bg-blue-500 text-white font-semibold px-3 py-2 rounded-md hover:bg-blue-600 transition"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Add
        </button>
      </div>

      {message && <p className="text-red-500 text-sm font-medium">{message}</p>}
    </div>
  );
};

export default CreateTodo;
