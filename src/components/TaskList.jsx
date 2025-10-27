import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  editTask, removeTask, toggleComplete } from "../feature/todo/taskSlice";
import { Edit, Save, Trash2 } from "lucide-react";


const TaskList = () => {
    const [editId, setEditId]= useState(null)
    const [editText, setEditText]= useState("")
    const dispatch= useDispatch()
    const {tasks, filter} = useSelector((state) => state.tasks);
    const handleEdit = (id, text)=>{
        setEditId(id)
        setEditText(text)
    }

    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(editTask({id, newText: editText.trim() }))
            setEditId(null)
            setEditText("")
        }
    }
  return (
    <div className="w-2/4 mt-3 ">
        <ul className="space-y-3  ">

        {tasks.length === 0 && <p className=" flex justify-center">No tasks yet</p>}
        {tasks.map((task)=>{
            return(
            <li key={task.id} className="bg-gray-50 hover:bg-gray-100 transition-all border border-gray-300 rounded-xl p-3 flex items-center justify-between ">
                
                   <div className="flex gap-3 items-center justify-center">
                    <input type="checkbox" 
                    checked={task.completed}
                    onChange={(e)=>dispatch(toggleComplete(task.id))}
                    />

                    {
                    editId === task.id?
                    <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} className=" w-[500px] border border-gray-300 rounded-md p-2" />
                    :
                    <p className={`${task.completed ? "line-through text-gray-400" : ""}`}>{task.text}</p>
                    }
                    </div>
                   


                   <div className="flex items-center gap-4">
                    {editId===task.id? 
                    (<button onClick={() => handleSaveEdit(task.id, task.text)} className="cursor-pointer hover:scale-110 transition-all"><Save size={16}/></button>)
                    :
                    (<button onClick={() => handleEdit(task.id, task.text)} className="cursor-pointer hover:scale-110 transition-all"><Edit size={16}/></button>)}
                   
                    <button onClick={()=> dispatch(removeTask(task.id))} className="cursor-pointer hover:scale-110 transition-all hover:rotate-25" ><Trash2 color="red" size={16}/> </button>
                   </div>
                
                
            </li>
            )
        })}
        </ul>
    </div>
  )
}

export default TaskList