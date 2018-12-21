import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Callback from './Callback';
import Background from "./bgimages/homeBackground.jpg";
import './style/App.scss';
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HomeJumbotron from "./components/home/HomeJumbotron";
import Footer from "./components/Footer";

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
      <div className="App"  style={styleHome}>

        {/* <Home /> */}
        <Login />
        <Navbar />
        <HomeJumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
