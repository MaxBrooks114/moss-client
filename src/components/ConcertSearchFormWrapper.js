import React from 'react';
import ConcertSearchForm from './ConcertSearchForm';
import { getConcerts } from '../actions/concerts';
import { connect } from 'react-redux';


const ConcertSearchFormWrapper = ({ getConcerts }) => {


  const handleSubmit = (artist) => {
      getConcerts(artist)
  }



    return <ConcertSearchForm handleSubmit={handleSubmit} />



};

export default connect(null, { getConcerts })(ConcertSearchFormWrapper);
