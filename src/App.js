import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar'
import Login  from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import CurrentUserConcerts  from './components/CurrentUserConcerts'
import Home from './components/Home'
import NewReviewFormWrapper from './components/NewReviewFormWrapper'
import ConcertCard from './components/ConcertCard.js'
import { Route, Switch, withRouter } from 'react-router-dom'




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
