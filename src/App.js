import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'


class App extends React.Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render() {
    return (
      <div className ="App">
      <NavBar/>
      <MainContainer/>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(null, { getCurrentUser })(App);
