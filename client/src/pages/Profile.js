import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Edit from "../components/profile/Edit";
import Sessions from "../components/Sessions";

// only for testing, comments will usually be found in the sessions component (maybe)
import API from "../utils/API";

class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        pageON : "profile",
        username: "",
        sesh: null,
        comment: "",
    }

    componentDidMount() {
        this.getUsername();
        this.getCommentFromUser();
    }

    getUsername = () => {
        let user = sessionStorage.getItem('username');
        this.setState({username: user});
    }

    getCommentFromUser = (e) => {
        if (e){
            let comment = e.target.value;
            this.setState({comment: comment});
        }
    }
    
    //ask about the await
    /*
    async function (e) {
        this.setState({comment: "typing..."});
        let comment = await e.target.value;
        this.setState({comment: comment});

    }
    */

    grabComments = (e) => {

    }

    releaseComment = (e) => {
        console.log("worked");
        API.postComment({
            username: this.state.username,
            comment: this.state.comment,
        })
        console.log("worked");
    }

    render () {
        return (
            <div className="profileHolder">
            <Navbar link="to home" toPage={this.props.toPage}/>
            <Edit get={this.getCommentFromUser} grab={this.grabComments} release={this.releaseComment} comment4post={this.state.comment}/>
            <Footer />
            </div>
        )
    }
}

export default Profile;