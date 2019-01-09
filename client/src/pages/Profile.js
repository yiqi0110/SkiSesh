import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Edit from "../components/profile/Edit";
import Sessions from "../components/Sessions";

class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        pageON : "profile",
    }

    render () {
        return (
            <div className="profileHolder">
            <Navbar link="home"/>
            <Edit />
            <Footer />
            </div>
        )
    }
}

export default Profile;