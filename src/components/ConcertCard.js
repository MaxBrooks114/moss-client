import React from 'react'
import {Link} from 'react-router-dom'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

const ConcertCard = ({ concert, userId }) => {
console.log(userId)

  return (
    concert ?
      <div>
        <h3>{concert.attributes.name}</h3>
        <p>Date: {concert.attributes.date}</p>
        <p>Artist: {concert.attributes.artist}</p>
        <p>Venue: {concert.attributes.venue}</p>
        <p>{userId}</p>
        <p>Aggregated Score:{concert.attributes.combined_review_score}</p>
        {!!concert.attributes.reviews.find(rev => rev.user_id == userId) ? <p>final_score</p> : <Link to={`/concerts/${concert.id}/reviews/new`}>Add a review</Link> }


      </div> : <div> Maaaaan they ain't no concert here </div>
  )

}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return ({
    userId,
  })
}


export default connect(mapStateToProps)(ConcertCard)
