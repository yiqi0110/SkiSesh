import React from "react";
import "../style/Footer.scss";


function Footer() {
    return (
        <div className="footerContainer">
            <a href="https://github.com/yiqi0110/SkiSesh" target=" _blank">
                <img src="./images/github-mark.png" alt="Github Link" />
            </a>
            <span>&copy; Matthew Auretta & Trevor Li</span>
        </div>
    )
}

export default Footer;