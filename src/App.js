import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import { Route } from 'react-router-dom'
import  Login  from './components/Login.js'
import  Logout from './components/Logout.js'
import  CurrentUserConcerts  from './components/CurrentUserConcerts.js'



class App extends React.Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render() {
    return (
      <div className ="App">
      <NavBar/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout}/>
        <Route exact path="/users/:id/concerts" component={CurrentUserConcerts}/>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(null, { getCurrentUser })(App);
