import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Learn about Svelte to get started with Svelte',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Contact Me for more information',
    completed: false,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Learn  about MUI Grid to get started with MUI',
    completed: false,
  },
]
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      const taskFind = state.filter(element => element.id === action.payload);
      if(taskFind){
        state.splice(state.indexOf(taskFind), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description, completed } = action.payload;
      const foundTask = state.find(element => element.id === id);
      if(foundTask){
        foundTask.title = title;
        foundTask.description = description;
        foundTask.completed = completed;
      }
    }
  }
})

export const { addTask, removeTask , editTask} = taskSlice.actions;
export default taskSlice.reducer;
