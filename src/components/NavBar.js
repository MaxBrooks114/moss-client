import React from 'react';
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'


const NavBar = ({ currentUser }) =>{
  return (
    <div className="NavBar">
      {currentUser ? <strong>Welcome, {currentUser.attributes.name}</strong> : ""}
      <button> Login </button>
      <button> Sign Up </button>
      <button> Log out </button>

    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
