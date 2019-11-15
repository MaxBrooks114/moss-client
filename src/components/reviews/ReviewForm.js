import React from 'react'
import { connect } from 'react-redux'
import { updateReviewForm } from '../.././actions/reviews/reviewForm'
import { withRouter } from 'react-router-dom'



const ReviewForm = ({ formData, updateReviewForm, userId, concertId, review, handleSubmit, editMode}) => {

  const { performance_score, venue_score, set_score, sound_score, price, write_up } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateReviewForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData, userId, concertId)
    }}>
      <label>
        Rate the Performance:
        <select value={performance_score} name="performance_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
      </label>
      <label>
        Rate the Venue:
        <select value={venue_score} name="venue_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
      </label>
      <label>
        Rate the Set:
        <select value={set_score} name="set_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
      </label>
      <label>
        Rate the Sound:
        <select value={sound_score} name="sound_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
      </label>
      <label>
        Rate the Price:
        <select value={price} name="price" onChange={handleChange} >
          <option value=""> </option>
          <option value="free">Free</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
       </select>
      </label>
      <input placeholder="Write something about your experience!" type = "textarea" value={write_up} name="write_up" onChange={handleChange} />

      <input type ="submit" value={editMode ? "Update Review" : "Create Review" }/>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  const userId = state.currentUser ? state.currentUser.id : ""
  const concertId = ownProps.match.params.id
  return {
    formData: state.reviewForm,
    userId,
    concertId
  }
}


export default withRouter(connect(mapStateToProps, { updateReviewForm })(ReviewForm));
