import { configureStore } from '@reduxjs/toolkit'
import  taskSlice  from '../feature/todo/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskSlice
  },
})