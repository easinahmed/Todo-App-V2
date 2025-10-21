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
      const updated = state.todos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, isComplete: !t.isComplete }
        }
        return t
      })

      state.todos = updated

      // ✅ Update selectedTodo if it’s the same one
      if (state.selectedTodo && state.selectedTodo.id === action.payload) {
        const updatedSelected = updated.find(t => t.id === action.payload)
        state.selectedTodo = updatedSelected
      }

      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    isEdit: (state, action) => {
      const editTodo = state.todos.map((t) => {
        if (t.id === action.payload) t.isEdit = !t.isEdit;
        return t;

      })
      state.todos = editTodo;
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload
    },


    clearSelectedTodo: (state) => {
      state.selectedTodo = null
    }


  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, isEdit, completeTodo, setSelectedTodo, clearSelectedTodo } = todoSlice.actions

export default todoSlice.reducer