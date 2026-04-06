import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function Tasks() {
  const { tasks, toggleComplete, deleteTask } = useContext(TaskContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  let filteredTasks = tasks
    .filter((task) => task && task.title)
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  if (filter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  }

  if (filter === "pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tasks</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        className=" bg-black/50 border p-2 w-full md:w-1/2 rounded-lg md:h-12"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="flex gap-3">
        <button
          onClick={() => setFilter("all")}
          className="bg-blue-700 px-3 py-1 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="bg-blue-700 px-3 py-1 rounded"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className="bg-blue-700 px-3 py-1 rounded"
        >
          Pending
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-black/50 p-3 rounded-lg"
          >
            <span className={task.completed ? "line-through" : ""}>
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="bg-green-400 px-2 rounded"
              >
                ✔
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-400 px-2 rounded"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
