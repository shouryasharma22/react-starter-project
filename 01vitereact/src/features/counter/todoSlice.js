import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[{id:1, title:'learn redux'}],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo={id:nanoid(), title:action.payload}
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos=state.todos.filter(todo=>todo.id!==action.payload)
    },
    updateTodo: (state, action) => {
      const todo=state.todos.find(todo=>todo.id===action.payload.nanoid)
      if(todo){
        state.todos[todo].title=action.payload.title
      }
    },
  },
})

export const {addTodo, removeTodo, updateTodo}= todoSlice.actions
export default todoSlice.reducer