import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import Menu from '../components/Menu'
import CreateTodo from '../components/CreateTodo'
import DisplayTodo from '../components/DisplayTodo'
import DetailedTodo from '../components/DetailedTodo'
import { useSelector } from 'react-redux'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { selectedTodo, todos } = useSelector((state) => state.todo)

  return (
    <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-start gap-8 p-8">
      {/* Sidebar / Menu */}
      <div>
        {!isOpen && (
          <MenuIcon
            className="cursor-pointer hover:text-blue-600 transition"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && <Menu onClose={() => setIsOpen(false)} />}
      </div>

      {/* Main */}
      <main className="space-y-5 w-full">
        <h1 className="text-4xl font-bold">
          Today
          <span className="text-slate-400 text-2xl ml-2">
            ({todos.filter(t => !t.isComplete).length} tasks)
          </span>
        </h1>
        <CreateTodo />
        <DisplayTodo />
      </main>

      {/* Detail panel */}
      {selectedTodo && <DetailedTodo />}
    </div>
  )
}

export default Home
