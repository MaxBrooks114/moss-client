import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import {Nav }from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';

import { getUserReviews, getReviews } from '../actions/reviews/reviews'




const NavBar = ({ currentUser, loggedIn, getUserReviews, getReviews }) => {

  return (
    <>
      <Navbar sticky="top" bg="dark" >
        <Navbar.Brand>
         <h1>
          <LinkContainer to={'/about'}>
            <Button variant="success">
                Moss
            </Button>
          </LinkContainer>
         </h1>
          </Navbar.Brand>
          <Nav className="mr-auto" variant="pills">
              <LinkContainer exact activeClassName="active"  to="/concerts">
                <Nav.Link>Concerts</Nav.Link>
              </LinkContainer>
              <LinkContainer exact activeClassName="active" to="/reviews" >
                <Nav.Link >Reviews</Nav.Link>
              </LinkContainer>
              <LinkContainer exact activeClassName="active" to={`/users/${currentUser.id}/reviews`} >
                <Nav.Link>Your Reviews</Nav.Link>
               </LinkContainer>
          </Nav>
          <Nav >
            { loggedIn ? <><Logout/></> : null}
          </Nav>
      </Navbar>
    </>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, {getUserReviews, getReviews})(NavBar)
