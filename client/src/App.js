import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Background from "./bgimages/homeBackground.jpg";
import './style/App.scss';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const styleHome = {
  backgroundImage: `url(${Background})`,

  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

class App extends Component {

  state = {
    pageON: "profile",   // just "home" for now (tesing purposes)
  }

  render() {

    if (this.state.pageON === "login") {
      return (
        <div className="App"  style={styleHome}>
        <Login />
        <Footer />
      </div>
      );

    } else if (this.state.pageON === "home") {
      return (
        <div className="App"  style={styleHome}>
          <Home />
        </div>
      );
      
    } else if (this.state.pageON === "profile") {
      return (
        <div className="App"  style={styleHome}>
          <Profile />
        </div>
      );

    } else {
      console.log("sorry no page loaded");
    }
  }
}

export default App;
