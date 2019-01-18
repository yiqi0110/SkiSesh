
import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";
import "../style/Navbar.scss"

class NavBar extends Component {

  state = {
    isOpen: false
  };

  toggleCollapse = () => {this.setState({ isOpen: !this.state.isOpen })};
  
  onClick = (e) => {
    e.preventDefault();
    this.props.toPage(e.target.id);
    if (e.target.id === "home") {
      if (this.props.page !== "profile") {
        this.props.backToHome();
      }
    }
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
            <NavItem >
              <NavLink to="#!" id="home" className="link2homeORprofile btn btn-link" onClick={ this.onClick }>Home</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="#!" id="profile" className="link2homeORprofile btn btn-link" onClick={ this.onClick }>Profile</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavBar;