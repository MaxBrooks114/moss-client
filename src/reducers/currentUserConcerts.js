
export default (state = [], action) => {

  switch (action.type) {

    case "SET_CURRENT_USER_CONCERTS":
        return action.concerts

    default:

        return state
  }
}
