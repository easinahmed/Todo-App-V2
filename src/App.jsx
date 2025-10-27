import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'

const App = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center  justify-start  p-4 bg-slate-100'>
      <h1 className='text-2xl mb-3 mt-4 font-bold'>Task Manager</h1>
        <TaskForm/>
        <TaskList/>
    </div>
  )
}

export default App