import React, { useState, useEffect } from 'react'
import ReviewsList from '../.././components/reviews/ReviewsList'
import { getReviews, getConcertReviews, getUserReviews } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Reviews = ({getReviews, getUserReviews, getConcertReviews, concertId, currentUserId, userId}) => {
  const [ reviews ] = useState({})
  useEffect(() => {
      if (concertId){
        getConcertReviews(concertId)
      } else if (userId) {
        getUserReviews(userId)
      } else {
        getReviews()
      }
    }, [concertId, getConcertReviews, getReviews, getUserReviews, userId])
    return (
      <Container className="reviews-container">
        <ReviewsList reviews={reviews} />
      </Container>
    )
}


const mapStateToProps = (state, ownProps) => {
  const concertId = ownProps.match.path === "/concerts/:id/reviews" ? ownProps.match.params.id : null
  const userId = ownProps.match.path === "/users/:id/reviews" ? ownProps.match.params.id : null
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    concertId,
    currentUserId,
    userId
  })
}


export default withRouter(connect(mapStateToProps, {getReviews,getUserReviews,getConcertReviews})(Reviews))
