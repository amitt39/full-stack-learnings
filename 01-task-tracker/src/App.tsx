function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <main className="w-full mx-auto max-w-3xl min-h-screen px-4 pb-4 sm:px-6 bg-slate-950 shadow-[0_0_18px_rgba(255,255,255,0.08)] flex flex-col">
        <section className="pt-4">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">
              Manage your tasks
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg">
              Stay organised, get things done.
            </p>
          </div>
          <div className="flex w-full gap-2 mt-6">
            <input
              type="text"
              placeholder="Enter your task"
              autoFocus
              className="flex-1 min-w-0 rounded-md border-2 border-white bg-white/5 px-2 text-white placeholder:text-slate-400"
            />
            <button className="shrink-0 bg-white px-3 sm:px-4 py-2 rounded-md font-medium cursor-pointer">
              Add
            </button>
          </div>
        </section>
        <section className="flex-1 min-h-0 mt-4 rounded-2xl bg-white/5 flex flex-col items-center px-6">
          <h3 className="text-white/80 text-md uppercase font-semibold mt-2">
            Your Tasks
          </h3>
          <div className="w-full h-px bg-white/20 my-3"></div>
          <ul className="flex flex-col flex-1 gap-2 w-full overflow-y-auto mb-2 ">
            <li className="flex justify-between items-center bg-white/5 border border-white/10 shadow-md backdrop-blur-xl rounded-md px-2 py-4">
              <div className="flex min-w-0 items-center gap-2">
                <input type="checkbox" className="w-5 h-5 shrink-0" />
                <span className="min-w-0 wrap-break-words text-white">
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </div>
              <div className="">
                <button className="bg-red-800 text-white px-2 py-0.5 rounded-sm cursor-pointer">
                  Delete
                </button>
              </div>
            </li>
          </ul>
          <div className="w-full h-px bg-white/20 my-3"></div>
          <div className="flex gap-16 mb-4 text-white/40">
            <p>
              Total: <span className="font-semibold">0</span>
            </p>
            <p>
              Remaining: <span className="font-semibold">0</span>
            </p>
            <p>
              Completed: <span className="font-semibold">0</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
