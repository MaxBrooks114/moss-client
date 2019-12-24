import React from 'react'
import { connect } from 'react-redux'
import { updateSignup } from '../actions/signup.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupData, updateSignup, signup, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedInfo = {
      ...signupData,
      [name]: value
    }
    updateSignup(updatedInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupData, history)
  }
  return (
    <form className="form form__signup" onSubmit={handleSubmit}>
      <input placeholder="name" value={signupData.name} name="name" type="text" onChange={handleChange}/>
      <input placeholder="username" value={signupData.username} name="username" type="text" onChange={handleChange}/>
      <input placeholder="password" value={signupData.password} name="password" type="password" onChange={handleChange}/>
      <input type ="submit" value = "Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupData: state.signup
  }
}


export default connect(mapStateToProps, { updateSignup, signup })(Signup)
