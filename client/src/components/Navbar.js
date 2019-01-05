
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, FormInline } from "mdbreact";
import auth0Client from '../Auth';
import "../style/Navbar.scss"

class NavBar extends Component {

  state = {
    isOpen: false,
    history: "",
    pageON: ""
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  signOut = () => {
    auth0Client.signOut();
    this.state.history.replace('/');
  };


  render () {

    return (
    <div className="navContainer">

      <Navbar color="default-color" dark expand="md">
        <NavbarBrand>
          <img id="spin" src="./images/doubleBlack.png" alt="SeshLogo" width="30px" height="30px" />
          <strong className="white-text">
            The Sesh
          </strong>
        </NavbarBrand>
        <NavbarToggler
            onClick={this.toggleCollapse}
        />
        <Collapse
          id="navbarCollapse3"
          isOpen={this.state.isOpen}
          navbar
        >
          <NavbarNav left>
            <NavItem active>
              <button className="link2homeORprofile btn btn-link" onClick={() => {console.log("clicked")}} >{this.state.pageOn === "home" ? "Profile" : "Home"}</button>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <FormInline waves>
                {
                  !auth0Client.isAuthenticated() &&
                  <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
                }
                {
                  auth0Client.isAuthenticated() &&
                  <div>
                    <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                    {/* <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button> */}
                  </div>
                }
              </FormInline>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavBar;