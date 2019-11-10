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
    const { loggedIn, userId, concerts } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/users/:id/concerts' component={CurrentUserConcerts}/>
          <Route exact path='/concerts/:id' render={props => {
              const concert = concerts.find(concert => concert.id === props.match.params.id)
              const userId = props.userId
              console.log(concert)
              return <ConcertCard concert={concert} userId={userId} {...props}/>
            }
          }/>
          <Route exact path='/concerts/:id/reviews/new' component={NewReviewFormWrapper}/>
        </Switch>

      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  const concerts = ownProps.location.pathname.includes("users") ? state.currentUserConcerts : state.concerts
  const userId = state.currentUser ? state.currentUser.id : ""
  return ({
    loggedIn: !!state.currentUser,
    concerts,
    userId,
  })

}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
