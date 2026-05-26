export default function Homepage() {
  return (
    <div className="bg-slate-500 min-h-screen flex justify-center items-start pt-10">
  <div className="w-[350px]">


    {/* <!-- Input + Button --> */}
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

    {/* <!-- Todo Heading --> */}
    <h2 className="text-center text-black mb-4 font-medium">
      Todos
    </h2>

    {/* <!-- Todo List --> */}
    <div className="space-y-4">

      {/* <!-- Todo Item --> */}
      <div className="bg-zinc-900 rounded flex items-center justify-between px-4 py-3">
        <span className="text-white">learn redux</span>

        <button className="bg-red-500 hover:bg-red-600 p-2 rounded transition">
          🗑
        </button>
      </div>

      {/* <!-- Todo Item --> */}
      <div className="bg-zinc-900 rounded flex items-center justify-between px-4 py-3">
        <span className="text-white">chai aur redux</span>

        <button className="bg-red-500 hover:bg-red-600 p-2 rounded transition">
          🗑
        </button>
      </div>

    </div>

  </div>


    </div>
  );
}
