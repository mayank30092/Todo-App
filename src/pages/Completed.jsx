import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Completed() {
  const { tasks } = useContext(TaskContext);

  let filteredTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Completed</h1>
      {filteredTasks.map((task) => (
        <div key={task.id} className="bg-black/50 rounded-lg p-4">
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Completed;
