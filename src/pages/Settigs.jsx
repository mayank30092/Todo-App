import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Settings() {
  const { clearAllTasks, toggleTheme, darkMode } = useContext(TaskContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-black/50 flex flex-col p-4 gap-4 rounded-lg">
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button onClick={clearAllTasks}>Clear All Tasks</button>
      </div>
    </div>
  );
}

export default Settings;
