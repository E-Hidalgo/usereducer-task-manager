function appReducer(state, action) {

  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload]
      }
    case "DELETE_TASK":
      return {
        tasks: []
      }




    default:
      break;
  }
  console.log(state)
  console.log(action)
}

export default appReducer