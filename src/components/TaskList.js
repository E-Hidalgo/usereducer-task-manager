import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const { tasks, deleteAll, deleteTaskById } = useContext(GlobalContext);
  return (
    <div className="flex justify-center">
      <button className="bg-red-500 py-2 px-2 rounded" onClick={() => deleteAll()}>Delete All</button>
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
          >
            <div>
              <h1>{task.id}</h1>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
            <div>
              <Link
                className="bg-gray-600 hover:bg-gray-500 py-2 px-2"
                to={`/editTask/${task.id}`}
              >Edit</Link>
              <button className="bg-red-600 hover:bg-red-500 py-2 px-2" onClick={() => deleteTaskById(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};
