import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import Callback from './Callback';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeJumbotron from "./components/home/HomeJumbotron"
import './style/App.scss';
import Login from "./pages/Login";

const styleHome = {
  backgroundImage: "url('./images/homeBackground.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

class App extends Component {


  // componentDidMount(){
  //   document.body.style= {styleHome};
  //   console.log("background should load")
  // }

  render() {


    return (


      <div className="App">
        {/* <Route exact path='/callback' component={Callback}/> */}
        <Login />
        <Navbar />
        <HomeJumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
