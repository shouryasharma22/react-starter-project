import {useSelector , useDispatch} from 'react-redux'
import {addTodo} from '../features/counter/todoSlice'
function AddTodo() {
  const dispatch=useDispatch()
  const [input, setInput] = useState("")
  return (
   <div className="flex gap-2 mb-6">
      
      <input
        value={input}
        type="text"
        placeholder="Enter a Todo..."
        className="flex-1 bg-slate-900 text-white px-4 py-3 rounded outline-none placeholder:text-gray-400"
        onChange={(e)=>setInput(e.target.value)}
      />

      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded font-medium transition"
        onClick={() => {
          if (todoText) {
            dispatch(addTodo(todoText));
            setInput("")
          }
        }}
      >
        Add Todo
      </button>

    </div>
  )
}

export default AddTodo
