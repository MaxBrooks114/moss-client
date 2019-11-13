const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CONCERTS':
      return state;
    case 'GET_CONCERTS':
      return action.concerts.data
    case 'ADD_REVIEWS_TO_CONCERTS':
      return action.concerts
    case 'SAVE_CONCERT':
      return action
    default:
      return state;
  }
}
