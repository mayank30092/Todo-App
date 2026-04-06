import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import Completed from "./pages/Completed";
import Settings from "./pages/Settigs";

import "./App.css";

function App() {
  const { darkMode } = useContext(TaskContext);
  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen p-8 flex flex-col"
          : "bg-gradient-to-r from-orange-500 to-pink-600 min-h-screen text-white font-serif p-8 flex flex-col"
      }
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
