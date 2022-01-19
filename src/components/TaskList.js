import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);
  return (
    <div className="flex justify-center">
      <button onClick={() => deleteTask()}>Delete All</button>
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
