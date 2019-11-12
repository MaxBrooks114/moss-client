const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CONCERTS':
      return state;
    case 'GET_CONCERTS':
      return action.concerts.data
    default:
      return state;
  }
}
