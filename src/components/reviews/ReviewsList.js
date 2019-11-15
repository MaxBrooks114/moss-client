import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'




const Reviews = props => {

  const reviewCards = props.reviews.length > 0 ?
    props.reviews.map(r => <><Link key={r.id} to={`/reviews/${r.id}`}>{r.attributes.concert.name} by {r.attributes.user.username}</Link><br/></>)  : <p>You have no reviews!</p>

  return reviewCards
}



const mapStateToProps = (state, ownProps) => {
  return {
    
    reviews: state.reviews

  }
}

export default withRouter(connect(mapStateToProps)(Reviews))
