
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../style/Navbar.scss"

function NavBar(props) {

  console.log(props.handleClick);
  return (
    <nav className="navbar navbar-dark">
      <Link className="navbar-brand" to="/">
        <img id="spin" src="./images/doubleBlack.png" alt="SeshLogo" width="30px" height="30px" />
        The Sesh
      </Link>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <button id="homeNAV" className="navLink btn-dark" onClick={props.handleClick}>Home</button>
        </li>
        <li className="nav-item">
          <button id="profileNAV" className="navLink btn-dark" onClick={props.handleClick}>Profile</button>
        </li>
        <li className="nav-item">
          <button id="loginNAV" className="navLink btn-dark" onClick={props.handleClick}>Sign In/Out</button>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBar);