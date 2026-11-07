import type { Task } from "../App";

type TaskListProp = {
  tasks: Task[];
};

function TaskList({ tasks }: TaskListProp) {
  return (
    <>
      {" "}
      <section className="flex-1 min-h-0 mt-4 rounded-2xl bg-white/5 flex flex-col items-center px-6">
        <h3 className="text-white/80 text-md uppercase font-semibold mt-2">
          Your Tasks
        </h3>
        <div className="w-full h-px bg-white/20 my-3"></div>
        <ul className="flex flex-col flex-1 gap-2 w-full overflow-y-auto mb-2 ">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex justify-between items-center bg-white/5 border border-white/10 shadow-md backdrop-blur-xl rounded-md px-2 py-4"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 shrink-0" />
                  <span className="min-w-0 wrap-break-words text-white">
                    {task.title}
                  </span>
                </div>
                <div className="">
                  <button className="bg-red-800 text-white px-2 py-0.5 rounded-sm cursor-pointer">
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
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
    </>
  );
}

export default TaskList;
