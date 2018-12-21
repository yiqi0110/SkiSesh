import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Route} from 'react-router-dom';
import Callback from './Callback';
import Home from './pages/Home';
import Background from "./bgimages/homeBackground.jpg";
import './style/App.scss';
import Login from "./pages/Login";

const styleHome = {
  backgroundImage: `url(${Background})`,
  width: '100%',
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
<<<<<<< HEAD:src/App.js
      <div className="App"  style={styleHome}>
        <Route exact path='/callback' component={Callback}/>
        <Home />
=======


      <div className="App">
        {/* <Route exact path='/callback' component={Callback}/> */}
        <Login />
        <Navbar />
        <HomeJumbotron />
        <Footer />
>>>>>>> 0da1f108ff13418dd9c02f8935385444b06e3cda:client/src/App.js
      </div>
    );
  }
}

export default App;
