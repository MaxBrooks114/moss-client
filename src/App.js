import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import { getConcerts, addReviewsToConcerts } from './actions/concerts'
import { getReviews, getUserReviews} from './actions/reviews.js'
import NavBar from './components/NavBar'
import Login  from './components/Login'
import Signup from './components/Signup'
import Concerts from './components/Concerts'
import CurrentUserConcerts  from './components/CurrentUserConcerts'
import Home from './components/Home'
import NewReviewFormWrapper from './components/NewReviewFormWrapper'
import EditReviewFormWrapper from './components/EditReviewFormWrapper'
import ConcertCard from './components/ConcertCard.js'
import Reviews from './components/Reviews'
import ReviewCard from './components/ReviewCard.js'
import { Route, Switch, withRouter } from 'react-router-dom'




class App extends React.Component {
  componentDidMount(ownProps){
    this.props.getCurrentUser()
    this.props.getConcerts()

  }
  render() {
    const { loggedIn, userId, concerts, reviews } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/concerts' component={Concerts}/>
          <Route exact path='/users/:id/concerts' component={CurrentUserConcerts}/>
          <Route exact path='/concerts/:id' render={props => {
              const concert = concerts.find(concert => concert.id === props.match.params.id)
              const userId = props.userId
              console.log(concert)
              return <ConcertCard concert={concert} userId={userId} {...props}/>
            }
          }/>
          <Route exact path='/reviews/:id' render={props => {
              const review = reviews.find(review => review.id === props.match.params.id)
              const userId = props.userId
              return <ReviewCard review={review} userId={userId} {...props}/>
            }
          }/>
          <Route exact path='/concerts/:id/reviews/new' component={NewReviewFormWrapper}/>
          <Route exact path='/concerts/:id/reviews' component={Reviews}/>
          <Route exact path='/reviews/:id/edit' render={props => {
             const review = reviews.find(review => review.id === props.match.params.id)
             return <EditReviewFormWrapper review={review} {...props}/>
           }
         }/>
         <Route exact path='/reviews' component={Reviews}/>
         <Route exact path='/users/:id/reviews' component={Reviews}/>
        </Switch>

      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  const concerts = ownProps.location.pathname.includes("users") ? state.currentUserConcerts : state.concerts
  const reviews = state.reviews
  const userId = state.currentUser ? state.currentUser.id : ""
  return ({
    loggedIn: !!state.currentUser,
    concerts,
    userId,
    reviews
  })

}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getReviews, getUserReviews, getConcerts, addReviewsToConcerts })(App));
