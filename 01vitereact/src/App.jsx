import { useState } from 'react'
import AddTodo from './components/addTodo'
import './App.css'
import Todo from './components/todos'
function App() {
  return (
    <>
    <div className="bg-slate-500 min-h-screen flex justify-center items-start pt-10">
    <div className="w-[350px]">
      <AddTodo />
      <Todo />
    </div>
    </div>
    </>
  )
}

export default App
