import React from 'react'
import CreateTask from '../components/CreateTask'
import TaskList from '../components/TaskList'

const Home = () => {
  return (
    <div className=' p-8'>
        <header className='flex items-center gap-10'>

        <span>HI</span>

        <h1 className='text-4xl font-bold'>Today <span>{/* there will be dynamic value */}</span></h1>
        
        </header>

        <main className='container mx-auto p-8'>
            <CreateTask/>
            <TaskList/>
        </main>

    </div>
  )
}

export default Home