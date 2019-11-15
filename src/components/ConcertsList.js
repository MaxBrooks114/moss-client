import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { saveConcert } from '../actions/concerts'




const ConcertsList = ({concerts, saveConcert}) => {

    return (
      <div className = "concerts-list">
        {concerts.sort((a, b) => (a.datetime < b.datetime) ? 1 : -1).map(c => <><Link key={c.id} to={`/concerts/${c.id}`}  onClick={()=>saveConcert(c)}>{c.lineup[0]} at {c.venue.name} on {c.datetime}</Link><br/></>)}
      </div>
    )
}



const mapStateToProps = (state, ownProps) => {
  return {

      concerts: state.concerts

  }
}

export default withRouter(connect(mapStateToProps, {saveConcert})(ConcertsList))
