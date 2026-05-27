import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const savedTodos=localStorage.getItem("my_todos")
const initialState = {
  todos: savedTodos ? JSON.parse(savedTodos) : [{id:1, title:'learn redux'}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo={id:nanoid(), title:action.payload}
      state.todos.push(todo)
      localStorage.setItem("my_todos", JSON.stringify(state.todos))
    },
    removeTodo: (state, action) => {
      state.todos=state.todos.filter(todo=>todo.id!==action.payload)
      localStorage.setItem("my_todos", JSON.stringify(state.todos))
    },
    updateTodo: (state, action) => {
      const {id , title}=action.payload
      const todo=state.todos.find(todo=>todo.id===id)
      if(todo){
        todo.title=title
        localStorage.setItem("my_todos", JSON.stringify(state.todos))
      }
    },
  },
})

export const {addTodo, removeTodo, updateTodo}= todoSlice.actions
export default todoSlice.reducer