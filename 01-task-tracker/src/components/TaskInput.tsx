import { useState } from "react";

type TaskInputProp = {
  onAddTask: (title: string) => void;
};

function TaskInput({ onAddTask }: TaskInputProp) {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="flex w-full gap-2 mt-6">
        <input
          type="text"
          placeholder="Enter your task"
          autoFocus
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="flex-1 min-w-0 rounded-md border-2 border-white bg-white/5 px-2 text-white placeholder:text-slate-400"
        />
        <button
          className="shrink-0 bg-white px-3 sm:px-4 py-2 rounded-md font-medium cursor-pointer"
          onClick={() => {
            if (title.trim()) {
              onAddTask(title.trim());
              setTitle("");
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default TaskInput;
