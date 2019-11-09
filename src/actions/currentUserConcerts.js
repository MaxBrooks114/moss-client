// synchronous actions
export const setCurrentUserConcerts = concerts => {
  return {
    type: "SET_CURRENT_USER_CONCERTS",
    concerts
  }
}




// async actions

export const getCurrentUserConcerts = (user) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}/concerts`, {
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
          dispatch(setCurrentUserConcerts(response))
        }
      })
      .catch(console.log)
  }
}
