import React from 'react';
import { connect } from 'react-redux'
import { updateConcertSearchForm } from '../actions/concertSearchForm'


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
      <input className='form-control' placeholder="Artist" type="text" name="artist" value={ artist } onChange={ handleChange }/>
      <button className="search-button" type="submit">Search Concerts</button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    artist: state.concertSearchForm.artist
  }
}

export default connect(mapStateToProps, {updateConcertSearchForm}) (ConcertSearchForm);
