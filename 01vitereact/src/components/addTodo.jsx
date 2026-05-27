function AddTodo() {
  return (
   <div className="flex gap-2 mb-6">
      
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="flex-1 bg-slate-900 text-white px-4 py-3 rounded outline-none placeholder:text-gray-400"
      />

      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded font-medium transition"
      >
        Add Todo
      </button>

    </div>
  )
}

export default AddTodo
