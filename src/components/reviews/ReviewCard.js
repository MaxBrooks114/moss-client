import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { getUserReviews } from '../.././actions/reviews/reviews'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { LinkContainer } from 'react-router-bootstrap'


class ReviewCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      likes: 0
     }

  }

  capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

handleClick = (event) => {
  console.log(this.state.likes)
  this.setState({
    likes: this.state.likes + 1
})
}

render () {
  return (
    this.props.review ?
      <Card bg="secondary" text="black">
        <Card.Body>
          <Card.Title>{this.capitalize(this.props.review.attributes.user.username)}'s review of {this.props.review.attributes.concert.name}
          <LinkContainer to={`/concerts/${this.props.review.attributes.concert.id}`}>
            <Button variant="success"> See This Concert </Button>
          </LinkContainer> </Card.Title>
          <ListGroup>
            <ListGroup.Item  variant="info">Performance: {this.props.review.attributes.performance_score}/5</ListGroup.Item>
            <ListGroup.Item  variant="info">Venue: {this.props.review.attributes.venue_score}/5</ListGroup.Item>
            <ListGroup.Item  variant="info">Sound: {this.props.review.attributes.sound_score}/5</ListGroup.Item>
            <ListGroup.Item  variant="info">Set: {this.props.review.attributes.set_score}/5</ListGroup.Item>
            <ListGroup.Item  variant="info">Price: {this.props.review.attributes.price}</ListGroup.Item>
            <ListGroup.Item  variant="info"> {this.props.review.attributes.write_up}</ListGroup.Item>
            <ListGroup.Item  variant="info">Final Score: {this.props.review.attributes.final_score}/5</ListGroup.Item>
          </ListGroup>
          {this.props.review.attributes.user.id == this.props.currentUserId ? <LinkContainer to={`/reviews/${this.props.review.id}/edit`}>
            <Button variant="success">Edit your review</Button>
            </LinkContainer> : ""}<br/>
          <LinkContainer to={`/users/${this.props.review.attributes.user.id}/reviews`}>
            <Button variant="success"> See all of {this.props.review.attributes.user.username}'s reviews</Button>
          </LinkContainer>
            <Button onClick={this.handleClick}> {this.state.likes} </Button>

        </Card.Body>

      </Card> : <Card bg="secondary" text="black"> Maaaaan they ain't no review here </Card>
  )

}
}


const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    currentUserId
  })
}

export default withRouter(connect(mapStateToProps, {getUserReviews})(ReviewCard))
