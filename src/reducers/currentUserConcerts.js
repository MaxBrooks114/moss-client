const initialState = []



export default (state = initialState, action) => {

  switch (action.type) {

    case "SET_CURRENT_USER_CONCERTS":
        return action.concerts

    case "CLEAR_CURRENT_USER_CONCERTS":
         return initialState

    default:

        return state
  }
}
