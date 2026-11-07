import { useState } from "react";
import ProjectHeader from "./components/ProjectHeader";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  function addTask(title: string) {
    setTasks([...tasks, { id: Date.now(), title: title, completed: false }]);
  }

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", completed: false },
  ]);

  return (
    <div className="min-h-screen bg-slate-950">
      <main className="w-full mx-auto max-w-3xl min-h-screen px-4 pb-4 sm:px-6 bg-slate-950 shadow-[0_0_18px_rgba(255,255,255,0.08)] flex flex-col">
        <section className="pt-4">
          <ProjectHeader />
          <TaskInput onAddTask={addTask} />
        </section>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
