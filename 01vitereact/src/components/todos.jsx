import {useSelector , useDispatch} from 'react-redux'
import reducer from '../features/counter/todoSlice'

function Todos(){
    const select=useSelector(state=>state.todos)
const dispatch=useDispatch(state=>state.todos)
      return(    
    <>
    <h2 className="text-center text-black mb-4 font-medium">
      Todos
    </h2>

    {/* <!-- Todo List --> */}
    <div className="space-y-4">
    {select.map(todo=>{return(
      <div className="bg-zinc-900 rounded flex items-center justify-between px-4 py-3">
        <span className="text-white">{todo.title}</span>

        <button className="bg-red-500 hover:bg-red-600 p-2 rounded transition" onClick={() => dispatch(removeTodo(todo.id))}>
          🗑
        </button>
      </div>
    )
    }
    )}
    </div>
    </>
    ) 
}

export default Todos