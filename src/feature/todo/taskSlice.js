import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('tasks');
    
    return data? JSON.parse(data): [];
  } catch (e) {
    console.log("Could not load tasks from localStorage", e);
    return [];
  }
}

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const initialState = {
      tasks: loadFromLocalStorage(),
      filter: {
        status: "all",
        search: ""
      }
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
      addTask: (state, action )=> {
        state.tasks.push(action.payload);
        saveToLocalStorage(state.tasks)
      },
      
      removeTask: (state, action)=> {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
        saveToLocalStorage(state.tasks)
      },
      
      toggleComplete: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if(task) task.completed  = !task.completed;
            saveToLocalStorage(state.tasks)
        },

      editTask: (state, action)=> {
        const { id, newText } = action.payload;
        const task = state.tasks.find(task => task.id === id);
        if (task) task.text = newText;
        saveToLocalStorage(state.tasks);
      },
      
      setStatusFilter: (state, action) => {
        state.filter.status = action.payload;
      },
      
      setSearchFilter: (state, action) => {
        state.filter.search = action.payload;
      }

  },
})

// Action creators are generated for each case reducer function
export const {addTask, removeTask, editTask, toggleComplete, setSearchFilter, setStatusFilter } = taskSlice.actions

export default taskSlice.reducer