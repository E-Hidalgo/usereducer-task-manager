import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GlobalContext } from "../context/globalContext";

export const TaskForm = () => {
  const { tasks, addTask, updateTask } = useContext(GlobalContext);
  const { id } = useParams();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === id);

    if (foundTask) {
      setNewTask(foundTask);
    }
  }, [id]);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? updateTask(newTask) : addTask(newTask);

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h1 className="mb-7 text-3x1  font-bold">
          {id ? `Edit Task: ${id}` : "Add Task"}
        </h1>
        <div className="mb-5">
          <label> Title</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            placeholder="Write a title"
            className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label> Description</label>
          <textarea
            type="text"
            name="description"
            rows="2"
            value={newTask.description}
            placeholder="Write a description"
            className="py-3 px-4 focus: text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4">
          {id ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
};
