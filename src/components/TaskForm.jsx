import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../feature/todo/taskSlice"
import { nanoid } from "nanoid"


const TaskForm = () => {
  const dispatch = useDispatch()

   const [text, setText] = useState()
   const handleSubmit =(e)=> {
      e.preventDefault();

      if (text.trim()=== "") {
       return alert("Task cant be empty");
      
      }
      if (text.trim().length < 3) {
        return alert("Task must be at least 3 characters long");
      }

      dispatch(addTask({
        id : nanoid(),
        text : text.trim(),
        completed: false,
      }))

        
      

   }
   console.log(text);
   

    return (
        <form onSubmit={handleSubmit} className="flex items-center w-[500px] gap-2 mb-4">
            <input 
            type="text"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new task" 
            className="flex-1 p-2 border rounded-md" 
            />

            <button type="submit" className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-600">Add Task</button>
        </form>
    )
}

export default TaskForm