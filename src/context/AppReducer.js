export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_ALL_TASK":
      return {
        tasks: [],
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK":
      const editTask = action.payload;
      const editedTasks = state.tasks.map((task) => {
        return task.id === editTask.id ? (task = editTask) : null;
      });
      return {
        tasks: editedTasks,
      };

    case "DONE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };

    default:
      return state;
      break;
  }
};
