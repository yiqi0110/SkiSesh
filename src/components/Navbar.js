
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';
import "../style/Navbar.scss"

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };


function Navbar() {

    return (
        <div className="navbar navbar-dark navContainer">
            <div className="row">
                <Link className="navbar-brand" to="/">
                  The Sesh
                </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
                <div className="linksForRerendering">
                    <button className="takeMeAway btn-link nav-item">Home</button>
                    <button className="takeMeAway btn-link nav-item">Weather</button>
                    <button className="takeMeAway btn-link nav-item">Profile</button>
                </div>
            </div>

        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);