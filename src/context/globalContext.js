import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { v4 } from "uuid";
const initialState = {
  tasks: [{ title: "1", description: "1", id: "c140", done: false }],
};

export const GlobalContext = createContext([initialState]);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTask = (newTask) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...newTask, id: v4().split("-")[1], done: false },
    });
  };

  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL_TASK",
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };

  const doneTask = (id) => {
    dispatch({
      type: "DONE_TASK",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, deleteAll, deleteTask, updateTask, doneTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
