import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export const TaskList = () => {
  const { tasks, deleteAll, deleteTask, doneTask } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <button
        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={() => deleteAll()}
      >
        Delete all
      </button>
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.id}</h1>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                Edit
              </Link>

              <button
                className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                onClick={() => doneTask(task.id)}
              >
                {task.done ? "✔️" : "❌"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
