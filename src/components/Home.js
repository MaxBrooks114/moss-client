import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
   <h1>A rolling stone gathers no Moss</h1>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </div>
);


export default Home;
