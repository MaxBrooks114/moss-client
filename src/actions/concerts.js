import axios from 'axios';


export const setConcerts = concerts => {
  return {
    type: "SET_CONCERTS",
    concerts
  }
}

export const clearConcerts = () => {
  return {
    type: "CLEAR_CONCERTS"
  }
}

const REACT_APP_SEATGEEK_CLIENT_ID = process.env.REACT_APP_SEATGEEK_CLIENT_ID ;

export const getConcerts = (query) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONCERTS' });
    return axios.get("https://rest.bandsintown.com/artists/Kishi%20Bashi/events?app_id=73b689174c8cd3f299a050e1c75f57a5&date=past")
      .then(concerts => {dispatch({ type: 'GET_CONCERTS', concerts })}


    ).then(concerts => {dispatch({ type: 'ADD_REVIEWS_TO_CONCERTS', concerts})})
  };
}
