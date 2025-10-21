import { ArrowRight } from 'lucide-react'
import React from 'react'

const TaskList = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 border-b border-slate-200 rounded-md mb-4'>
    <input type="checkbox" className='w-5 h-5'/>
    <span className='text-lg '>This is a sample task</span>
    <ArrowRight className='text-slate-400 font-bold'/>
    </div>
  )
}

export default TaskList