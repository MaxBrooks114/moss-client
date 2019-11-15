
import React from 'react';
import ConcertSearchFormWrapper from './ConcertSearchFormWrapper';
import ConcertsList from './ConcertsList';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

const Concerts = (props) => {
    return (
      <div className="concerts-container">
        <ConcertSearchFormWrapper />
        { (props.concerts.length > 0 && props.concerts !== '\n{warn=Not found}\n') ? <ConcertsList /> : null }
      </div>
    )
};

export default connect((state) => ({ concerts: state.concerts })) (Concerts);
