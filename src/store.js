import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import login from './reducers/login'
import signup from './reducers/signup'
import currentUserConcerts from './reducers/currentUserConcerts'
import reviewForm from './reducers/reviewForm'
import reviews from './reducers/reviews'
import concerts from './reducers/concerts'


const reducer = combineReducers({
    users,
    currentUser,
    login,
    signup,
    reviewForm,
    reviews,
    currentUserConcerts,
    concerts

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
