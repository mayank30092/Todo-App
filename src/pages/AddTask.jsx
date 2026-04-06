import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("general");

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      completed: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
  };
  const quotes = [
    "Small progress is still progress 😃",
    "Focus on one task at a time 😍",
    "Done is better than perfect 🤩",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className=" min-h-screen w-full">
      <h1 className="text-3xl font-bold">Plan Your Day Now...</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-black/50 mt-8 w-full md:w-1/2 rounded-2xl p-8 flex flex-col gap-6"
      >
        {/* Task Title */}
        <input
          maxlength={50}
          className="border p-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <p className="text-sm text-gray-300">{title.length}/50 characters</p>

        {/* Priority */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>

        <button className="bg-blue-600 h-12 rounded-lg text-white hover:bg-blue-700 transition">
          Add Task
        </button>
      </form>
      <p className="mt-8 italic font-bold text-lg flex justify-center text-white">
        {quote}
      </p>
    </div>
  );
}

export default AddTask;
