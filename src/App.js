import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import { getConcerts, addReviewsToConcerts } from './actions/concerts'
import { getReviews, getUserReviews} from './actions/reviews.js'
import NavBar from './components/NavBar'
import Login  from './components/Login'
import Signup from './components/Signup'
import ConcertsList from './components/ConcertsList'
import CurrentUserConcerts  from './components/CurrentUserConcerts'
import Home from './components/Home'
import NewReviewFormWrapper from './components/NewReviewFormWrapper'
import EditReviewFormWrapper from './components/EditReviewFormWrapper'
import ConcertFetcher from './components/ConcertFetcher'
import Concerts from './components/Concerts'
import Reviews from './components/Reviews'
import ReviewCard from './components/ReviewCard.js'
import ConcertSearchForm from './components/ConcertSearchForm'
import { Route, Switch, withRouter } from 'react-router-dom'




class App extends React.Component {
  componentDidMount(ownProps){
    this.props.getCurrentUser()

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
          <Route exact path='/concerts/:id' component={ConcertFetcher}/>
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
  const userId = state.currentUser ? state.currentUser.id : ""
  return ({
    loggedIn: !!state.currentUser,
    concerts: state.concerts,
    userId,
    reviews: state.reviews
  })

}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getReviews, getUserReviews, getConcerts, addReviewsToConcerts })(App));
