import React, { createContext, useReducer } from 'react'
import appReducer from "./AppReducer"
import { v4 } from "uuid"

//? -------- SET INITIAL STATE -------------

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Buy bread",
      description: "quickly",
      done: false
    },
  ]
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

  //? -------- DELETE TASK FUNCTION -------------

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK" })
  }


  return (
    <GlobalContext.Provider value={{ ...state, addNewTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  )
}


