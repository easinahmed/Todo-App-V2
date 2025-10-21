import { PlusCircleIcon } from "lucide-react"


const CreateTask = () => {
  return (
    <div className="flex items-center gap-2 w-full font-semibold p-4 border border-slate-200 rounded-md cursor-pointer hover:border-slate-400 transition-colors">
      <PlusCircleIcon/>
      Add New Task
    </div>
  )
}

export default CreateTask