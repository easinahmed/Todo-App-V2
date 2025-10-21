import { ArrowRightFromLine, Calendar1Icon, List, MenuIcon, Paperclip, Search, Plus, LogOut, Settings } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Menu = ({ onClose }) => {
    const { todos } = useSelector((state) => state.todo)
    const todayCount = todos.filter(t => !t.isComplete).length
    const upcomingCount = todos.filter(t => !t.isComplete && t.dueDate > new Date()).length

    const customLists = [
        { name: 'Personal', color: 'bg-red-400' },
        { name: 'Work', color: 'bg-cyan-400' },
        { name: 'List 1', color: 'bg-yellow-400' },
    ];

   

   

    return (
        <div className='bg-gray-100  rounded-md p-4'>
            <h2 className='w-[300px] font-bold text-2xl flex items-center justify-between'>Menu <span onClick={onClose}><MenuIcon /></span></h2>
            <div className="w-full flex items-center gap-2 p-2 my-2 border rounded-md font-semibold border-slate-400 focus-within:border-blue-500 transition">
                <Search className="text-slate-600 w-5 h-5" />
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
                />
            </div>

            <p className='font-semibold mt-8'>TASKS</p>
            <div className='mt-2  text-gray-400 space-y-3 font-semibold'>
                <div className='flex items-center hover:bg-gray-200 p-2 rounded-md justify-between'>
                    <p className='flex items-center gap-2'><ArrowRightFromLine />Upcoming</p>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">{upcomingCount}</span>
                </div>
                <div className='flex items-center hover:bg-gray-200 p-2 rounded-md justify-between'>
                    <p className='flex items-center gap-2'><List />Today</p>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">{todayCount}</span>
                </div>
                <div className='flex items-center hover:bg-gray-200 p-2 rounded-md gap-2'><Calendar1Icon /><p>Calender</p> </div>
                <div className='flex items-center hover:bg-gray-200 p-2 rounded-md gap-2'><Paperclip /><p>Sticky Wall</p> </div>
            </div>


            <div className="mb-8 mt-8">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">LISTS</h3>
                {customLists.map(list => (
                    <button
                        key={list.name}
                        // onClick={() => setActiveList(list.name)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg mb-1 transition-colors `}
                    >
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded ${list.color}`}></div>
                            <span className="text-sm font-medium">{list.name}</span>
                        </div>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">{}</span>
                    </button>
                ))}
                <button className="w-full flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-gray-900">
                    <Plus className="w-4 h-4" /> Add New List
                </button>
            </div>

             <div className="border-t border-gray-200 pt-4">
                <button className="w-full flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-gray-900">
                    <Settings/> Settings
                </button>
                <button className="w-full flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-gray-900">
                    <LogOut className='text-red-500'/> Sign out
                </button>
            </div>




        </div>




    )
}

export default Menu