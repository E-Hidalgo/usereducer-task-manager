import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export const TaskForm = () => {
  const { tasks, addNewTask } = useContext(GlobalContext)

  const navigate = useNavigate()

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newTask)
    addNewTask(...tasks, newTask)
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1">Add Task</h2>
        <div className="mb-5">
          <input type="text"
            name="title"
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange} />
          <textarea type="text"
            name="description"
            placeholder="Write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full mt-4"
            onChange={handleChange} />
          <button type="submit" value="Save Task" className="py-3 ipx-4 focus:outline-none focus:point-gray-100 hover:bg-green-500 bg-green-700 w-full mt-4">Save Task</button>
        </div>
      </form>
    </div>
  )
};
