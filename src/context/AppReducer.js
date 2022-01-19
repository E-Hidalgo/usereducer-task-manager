function appReducer(state, action) {

  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload]
      }

    case "UPDATE_TASK":
      return {
        tasks: []
      }

    case "DELETE_TASK":
      return {
        tasks: []
      }

    case "DELETE_BY_ID":
      console.log("DELETING")
      console.log(state.tasks);
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      break;
  }

}

export default appReducer