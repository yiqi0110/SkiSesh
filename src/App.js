import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Route} from 'react-router-dom';
import Callback from './Callback';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Background from "./bgimages/homeBackground.jpg";
import './style/App.scss';

const styleHome = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const styleLogin = {
  backgroundColor: "#666666",
}

class App extends Component {


  state = {
    pageOn: "homeNAV",     // will be login at deploy
  }

  // make if for make sesh vs find sesh
  handlePageClick = (e) => {
    console.log(e.target.id);
    this.setState({pageOn: e.target.id});
  }

  render() {

      if (this.state.pageOn === "loginNAV") {
        return (
          <div className="App"  style={styleLogin}>
            <Login />
          </div>
        )
      } else if (this.state.pageOn === "profileNAV") {
        return (
          <div className="App"  style={styleHome}>
          <Route exact path='/callback' component={Callback}/>
          <Navbar handleClick={this.handlePageClick}/>
          <Profile />
          <Footer />
          </div>
        )
      } else if (this.state.pageOn === "homeNAV") {
        return (
          <div className="App"  style={styleHome}>
          <Route exact path='/callback' component={Callback}/>
          <Navbar handleClick={this.handlePageClick}/>
          <Home />
          <Footer />
          </div>
        )
      } else {
        // render some wromg page things
      }
  }
}

export default App;
