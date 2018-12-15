import React from "react";
import "../style/Navbar.scss"

function Navbar() {

    return (
        <div className="navbar-dark navContainer">
            <div className="row">
                <div className="logoAndName">
                    <img src="#" alt="#"></img>
                    <h3><strong>The Sesh</strong></h3>
                </div>
                <div className="linksForRerendering">
                    <button className="takeMeAway btn-link nav-item">Home</button>
                    <button className="takeMeAway btn-link nav-item">Weather</button>
                    <button className="takeMeAway btn-link nav-item">Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;