import React, { createContext, useReducer } from 'react'
import appReducer from "./AppReducer"
import { v4 } from "uuid"

//? -------- SET INITIAL STATE -------------

const initialState = {
  tasks: []
}
//? -------- SET GLOBAL CONTEXT -------------

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  //? -------- ADD TASK FUNCTION -------------

  const addNewTask = (newTask) => {
    console.log("Task added")
    dispatch({ type: "ADD_TASK", payload: { ...newTask, id: v4().split("-")[1] } })
  }

  //? -------- DELETE ALL FUNCTION -------------

  const deleteAll = () => {
    dispatch({ type: "DELETE_TASK" })
  }

  //? -------- DELETE TASK BY ID FUNCTION -------------

  const deleteTaskById = (id) => {
    dispatch({ type: "DELETE_BY_ID", payload: id })
  }

  const updateTask = (id) => {
    dispatch({ type: "UPDATE_TASK", payload: id })
  }

  return (
    <GlobalContext.Provider value={{ ...state, addNewTask, deleteAll, deleteTaskById, updateTask }}>
      {children}
    </GlobalContext.Provider>
  )
}


