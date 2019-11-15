import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getConcerts, getConcert } from '../.././actions/concerts/concerts.js'
import { getConcertReviews } from '../.././actions/reviews/reviews.js'
import { withRouter } from 'react-router-dom'


const ConcertCard = ({concert, currentUserId}) => {

    return (
      concert && concert.attributes ?
        <div className = "ConcertCard">
          <p>Date: {concert.attributes.date}</p>
          <p>Artist: {concert.attributes.artist}</p>
          <p>Venue: {concert.attributes.venue}</p>
          <p>Aggregated Score: {concert.attributes.combined_review_score}</p>
          <Link to ={`/concerts/${concert.id}/reviews`}> See all reviews for this concert</Link><br/>
          {!!concert.attributes.reviews.find(review => review.user_id == currentUserId) ? <Link to ={`/reviews/${concert.attributes.reviews.find(review => review.user_id == currentUserId).id}`}>Your Review</Link> :<Link to ={`/concerts/${concert.id}/reviews/new`}> Add a Review </Link> }
          </div> : <div> No concert </div>
      )

    }

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  const concertId = ownProps.match.params.id
  return ({
    currentUserId,
    concertId,
    concerts: state.concerts,
    reviews: state.reviews,
    concert: state.concert,




  })
}


export default withRouter(connect(mapStateToProps, {getConcerts, getConcertReviews, getConcert})(ConcertCard))
