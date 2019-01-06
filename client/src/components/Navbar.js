
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../style/Navbar.scss"

function NavBar(props) {

  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
      <img id="spin" src="./images/doubleBlack.png" alt="SeshLogo" width="30px" height="30px"/>
        The Sesh
      </Link>
    </nav>
  );
}

export default withRouter(NavBar);