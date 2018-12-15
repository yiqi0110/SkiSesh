import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Route} from 'react-router-dom';
import Callback from './Callback';
import Home from './pages/Home';
import './style/App.scss';

const styleHome = {
  backgroundImage: "url('./images/homeBackground.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

class App extends Component {

  // Create if statement for 'page' to conditionally render "login", "home", and "profile".


  // make if for make sesh vs find sesh
  handleCollapseClick = (e) => {
      console.log(e.target);
  }

  render() {


    return (
      <div className="App">
        <Route exact path='/callback' component={Callback}/>
        <Home />
      </div>
    );
  }
}

export default App;
