import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron  from 'react-bootstrap/Jumbotron';

const Home = () => (
  <Jumbotron>
    <h1>A rolling stone gathers no Moss</h1>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </Jumbotron>
);


export default Home;
