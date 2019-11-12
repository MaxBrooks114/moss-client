import React from 'react';
import ReviewForm from './ReviewForm'
import { updateReview, deleteReview } from '../actions/reviews'
import { setFormDataForEdit, resetReviewForm } from '../actions/reviewForm'
import { connect } from 'react-redux'

class EditReviewFormWrapper extends React.Component {
  componentDidMount(){
    this.props.review && this.props.setFormDataForEdit(this.props.review)
  }

  componentDidUpdate(prevProps) {
    this.props.review && !prevProps.review && this.props.setFormDataForEdit(this.props.review)
  }

  componentWillUnmount() {
    this.props.resetReviewForm()
  }

  handleSubmit = (formData) => {
    const { updateReview, review, history } = this.props
    updateReview({
      ...formData,
      reviewId: review.id
    }, history)
  }

  render() {
    const { history, deleteReview, review } = this.props
    const reviewId = review ? review.id : null
    const concertId = review ? review.attributes.concert.id : null
    const userId = review ? review.attributes.user.id : null

    return  <>
              <ReviewForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button onClick={()=>deleteReview(reviewId, history, concertId, userId)}>Delete this review</button>
            </>
  }
};

export default connect(null, { updateReview, setFormDataForEdit, resetReviewForm, deleteReview })(EditReviewFormWrapper);
