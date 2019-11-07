import React from 'react'
import { connect } from 'react-redux'
import { updateLogin } from '../actions/login.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginData, updateLogin, login }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedInfo = {
      ...loginData,
      [name]: value
    }
    updateLogin(updatedInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={login.username} name="username" type="text" onChange={handleChange}/>
      <input placeholder="password" value={login.password} name="password" type="password" onChange={handleChange}/>
      <input type ="submit" value = "Log In"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginData: state.login
  }
}


export default connect(mapStateToProps, { updateLogin, login })(Login)
