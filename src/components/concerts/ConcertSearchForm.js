import React from 'react';
import { connect } from 'react-redux'
import { updateConcertSearchForm } from '../.././actions/concerts/concertSearchForm'
import Button from 'react-bootstrap/Button'


const ConcertSearchForm = ({ artist, updateConcertSearchForm, handleSubmit}) => {



  const handleChange = event => {
    const { name, value } = event.target
    updateConcertSearchForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(artist)
    }}>
      <input className='form-control' placeholder="Enter an artist here to see their past concerts" type="text" name="artist" value={ artist } onChange={ handleChange }/>
      <Button variant="success" className="search-button" type="submit">Search Concerts</Button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    artist: state.concertSearchForm.artist
  }
}

export default connect(mapStateToProps, {updateConcertSearchForm}) (ConcertSearchForm);
