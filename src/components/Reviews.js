import React, { useState, useEffect } from 'react'
import ReviewsList from './ReviewsList'
import { getReviews, getConcertReviews, getUserReviews } from '../actions/reviews'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Reviews = ({getReviews, getUserReviews, getConcertReviews, concertId, currentUserId, userId}) => {
  const [ reviews, setReviews ] = useState({})
  useEffect(() => {
      if (concertId){
        getConcertReviews(concertId)
      } else if (userId) {
        getUserReviews(userId)
      } else {
        getReviews()
      }
    }, [concertId, getConcertReviews, getReviews, getUserReviews, userId])
    return <ReviewsList reviews={reviews} />
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
