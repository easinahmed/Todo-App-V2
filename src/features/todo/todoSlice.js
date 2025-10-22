import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  selectedTodo: null,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    completeTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
      )
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    isEdit: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
      )
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload
    },

    clearSelectedTodo: (state) => {
      state.selectedTodo = null
    },
  },
})

export const {
  addTodo,
  removeTodo,
  isEdit,
  completeTodo,
  setSelectedTodo,
  clearSelectedTodo
} = todoSlice.actions

export default todoSlice.reducer
