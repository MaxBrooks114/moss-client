import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { getUserReviews } from '../actions/reviews'


const ReviewCard = ({ review, currentUserId, ownProps, getUserReviews }) => {



  return (
    review ?
      <div>
        <h3>{review.attributes.user.username}'s Review for <Link to={`/concerts/${review.attributes.concert.id}`}>{review.attributes.concert.name}</Link></h3>
        <p>Performance: {review.attributes.set_score}</p>
        <p>Venue: {review.attributes.venue_score}</p>
        <p>Sound: {review.attributes.sound_score}</p>
        <p>Set: {review.attributes.set_score}</p>
        <p>Price:{review.attributes.price}</p>
        <p>{review.attributes.write_up}</p>
        <p>Final Score: {review.attributes.final_score}</p>
        {review.attributes.user.id == currentUserId ? <Link to={`/reviews/${review.id}/edit`}>Edit your review</Link> : ""}<br/>
        <Link to={`/users/${review.attributes.user.id}/reviews`}> See all of {review.attributes.user.username}'s reviews</Link>


      </div> : <div> Maaaaan they ain't no review here </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    currentUserId,

  })
}

export default withRouter(connect(mapStateToProps, {getUserReviews})(ReviewCard))
