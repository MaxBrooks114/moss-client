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




export const getConcerts = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/concerts`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setConcerts(response.data))
        }
      })
      .catch(console.log)
  }
}
