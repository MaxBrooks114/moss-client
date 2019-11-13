import axios from 'axios';
import store from '../store';

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



const REACT_APP_BANDSINTOWN_APP_ID = process.env.REACT_APP_BANDSINTOWN_APP_ID ;

export const getConcerts = (query) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONCERTS' });
    return axios.get(`https://rest.bandsintown.com/artists/Kishi%20Bashi/events?app_id=${REACT_APP_BANDSINTOWN_APP_ID}&date=past`)
      .then(concerts => {
          dispatch({ type: 'GET_CONCERTS', concerts })
          dispatch(addReviewsToConcerts(concerts))})
    }
    }

export const saveConcert = (concertData) => {
    return dispatch => {
      const sendableConcertData = {
        venue: concertData.venue.name,
        artist: concertData.lineup[0],
        date: concertData.datetime,
        concert_api_id: parseInt(concertData.id, 10)
      }
      return fetch("http://localhost:3000/api/v1/concerts", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableConcertData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            console.log(resp.error)
          } else {
            console.log(resp.data)

          }
        })
        .catch(console.log)

    }
  }


export const addReviewsToConcerts = (concerts) => {
  return (dispatch, getState) => {
    const reviews  = store.getState().reviews
    return concerts.data.map(concert => concert.reviews = reviews.filter(review => review.concert.id === concert.id))
}
}
