import React from 'react';
import ReviewForm from '../.././components/reviews/ReviewForm'
import { createReview } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'

const NewReviewFormWrapper = ({ history, createReview }) => {

  const handleSubmit = (formData, userId, concertId) => {
    createReview({
      ...formData,
      userId, concertId
    }, history)
  }
  return  <ReviewForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createReview })(NewReviewFormWrapper);
