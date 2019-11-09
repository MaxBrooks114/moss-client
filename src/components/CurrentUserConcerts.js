import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ConcertCard from './ConcertCard.js'


const CurrentUserConcerts = props => {

const concertCards = props.concerts.length > 0 ?
  props.concerts.map(c => <ConcertCard key={c.id} concert={c}name ={c.name} venue={c.venue} artist={c.artist} />) : null

return concertCards
}



const mapStateToProps = state => {
return {
    concerts: state.currentUserConcerts
  }
}

export default connect(mapStateToProps)(CurrentUserConcerts)
