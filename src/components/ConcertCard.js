import React from 'react'
import {Link} from 'react-router-dom'

const ConcertCard = ({ concert }) => {
  return (
      <div>
        <h3>{concert.name}</h3>
        <p>{concert.date}</p>
        <p>{concert.artist}</p>
        <p>{concert.venue}</p>
      </div>
  )
}

export default ConcertCard
