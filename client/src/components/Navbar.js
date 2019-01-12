
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, FormInline } from "mdbreact";
import "../style/Navbar.scss"

class NavBar extends Component {

  state = {
    isOpen: false,
    history: "",
  };

  
  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  
  onClick = (e) => {
    e.preventDefault();
    this.props.toPage(e.target.id);
  }

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
              <button id="home" className="link2homeORprofile btn btn-link" onClick={ this.onClick }>Home</button>
              <button id="profile" className="link2homeORprofile btn btn-link" onClick={ this.onClick }>Profile</button>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <FormInline waves>
                    {/* <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button> */}
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