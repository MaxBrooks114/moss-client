import React from 'react'
import '../navbar.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import { getUserReviews, getReviews } from '../actions/reviews'




const NavBar = ({ currentUser, loggedIn, getUserReviews, getReviews }) => {

  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/concerts" >Concerts</NavLink>
      <NavLink exact activeClassName="active" to={"/Reviews"} onClick={()=>getReviews()}>Reviews</NavLink>
      <NavLink exact activeClassName="active" to={`/users/${currentUser.id}/reviews`} onClick={()=>getUserReviews(currentUser)}>Your Reviews</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, {getUserReviews, getReviews})(NavBar)
