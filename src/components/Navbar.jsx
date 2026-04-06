import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-1/2 mx-auto mb-10 relative">
      <div className="flex justify-between items-center bg-black/50 rounded-3xl p-3 md:p-4">
        <h1 className="text-xl font-bold mr-16 ml-4">Task App</h1>

        <button
          className="md:hidden text-2xl mr-4"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-4">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/add-task">AddTasks</NavLink>
          <NavLink to="/completed">Completed</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>

      {open && (
        <div className="text-lg absolute top-full left-0 w-full flex flex-col gap-3 mt-2 bg-black/90 rounded-3xl p-4 md:hidden">
          <NavLink onClick={() => setOpen(false)} to="/">
            Dashboard
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/tasks">
            Tasks
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/add-task">
            AddTasks
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/completed">
            Completed
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/settings">
            Settings
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
