const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONCERTS":
      return action.concerts
    case "ADD_CONCERT":
      return state.concat(action.concert)
    case "UPDATE_CONCERT":
      return state.map(concert => concert.id === action.concert.id ? action.concert : concert)
    case "DELETE_CONCERT":
      //console.log( "action.concertId is ", action.concertId)
      return state.filter(concert => concert.id === action.concertId ? false : true)
    case "CLEAR_CONCERTS":
      return initialState
    default:
      return state
  }
}
