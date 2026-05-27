import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/counter/todoSlice'
import { useState } from 'react'
function Todos() {
  const select = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  const [editingID, setEditingID] = useState(null)
  const [editingText, setEditingText] = useState('')

  function handleEditing() {

  }
  return (
    <>
      <h2 className="text-center text-black mb-4 font-medium">
        Todos
      </h2>

      <div className="space-y-4">
        {select?.map(todo => {
          const isEditing=editingID === todo.id
          return (
            <div key={todo.id} className="bg-zinc-900 rounded flex items-center justify-between px-4 py-3">
              {isEditing ?
                <input type="text" className="flex-1 bg-slate-900 text-white px-4 py-3 rounded outline-none placeholder:text-gray-400" 
                value={editingText} onChange={(e)=>setEditingText(e.target.value)}
                />
                :
                <span className="text-white">{todo.title}</span>}

              {isEditing ? 
              <button className="bg-green-500 hover:bg-green-600 p-2 rounded transition" onClick={() => {
                dispatch(updateTodo({ id: todo.id, title: editingText }))
                setEditingID(null)
                setEditingText("")
              }}>
                Save
              </button> 
              :
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition"
                    onClick={()=>{
                      setEditingText(todo.title)
                      setEditingID(todo.id)}
                    }
                  >
                    ✏️
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 p-2 rounded transition" onClick={() => dispatch(removeTodo(todo.id))}>
                    🗑
                  </button>
                </div>}

            </div>
          )

        })}
      </div>
    </>
  )
}

export default Todos