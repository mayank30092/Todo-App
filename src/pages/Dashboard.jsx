import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useContext(TaskContext);

  const totalTask = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTask - completedTasks;

  const completionRate =
    totalTask === 0 ? 0 : Math.round((completedTasks / totalTask) * 100);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 ">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-black/50 text-white p-6 rounded-xl text-center">
          <h2 className="text-xl font-bold">{totalTask}</h2>
          <p>Total Tasks</p>
        </div>
        <div className="bg-black/50 text-white p-6 rounded-xl text-center">
          <h2 className="text-xl font-bold">{completedTasks}</h2>
          <p>Completed</p>
        </div>
        <div className="bg-black/50 text-white p-6 rounded-xl text-center">
          <h2 className="text-xl font-bold">{pendingTasks}</h2>
          <p>Pending</p>
        </div>
        <div className="bg-black/50 text-white p-6 rounded-xl text-center">
          <h2 className="text-xl font-bold">{completionRate}%</h2>
          <p>Completion</p>
        </div>
      </div>
      <div className="mt-10 bg-black/50 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Progress</h2>

        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-green-400 h-4 rounded-full"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>

        <p className="mt-2">{completionRate}% tasks completed</p>
      </div>
      <div className="mt-10 flex gap-4 justify-center">
        <Link to="/add-task" className="bg-blue-500 px-4 py-2 rounded-lg">
          ➕ Add Task
        </Link>

        <Link to="/tasks" className="bg-blue-500 px-4 py-2 rounded-lg">
          📋 View Tasks
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
