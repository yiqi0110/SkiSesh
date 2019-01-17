import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Edit from "../components/profile/Edit";
import API from "../utils/API";

class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        seshResults: [],
        username: null,
        comment: null,
    }

    componentDidMount() {
        this.getUsername();
        this.getCommentFromUser();
        this.handleDelay();
    }

    handleDelay() {
        setTimeout(
            function () {
                this.handleFindSesh();
            }.bind(this),
            3000
        )
    }

    handleFindSesh = () => {
        API.findSeshForProfile({
            username: this.state.username
        }).then(res => {
            this.setState({ seshResults: res.data });
        })
    }

    getUsername() {
        let user = sessionStorage.getItem('username');
        this.setState({username: user});
    }

    getCommentFromUser = (e) => {
        if (e){
            let comment = e.target.value;
            this.setState({comment: comment});
        }
    }

    releaseComment = (e) => {
        let seshID = e.target.id;
        this.setState({seshID: seshID});
        API.postComment({
            username: this.state.username,
            comment: this.state.comment,
            sesh: seshID,
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(`heres the issue: ${err}`))
    }

    render () {
        return (
            <div className="profileHolder">
            <Navbar page="profile" toPage={this.props.toPage}/>
            <Edit seshQuery={true} get={this.getCommentFromUser} release={this.releaseComment} seshResults={this.state.seshResults} />
            <Footer />
            </div>
        )
    }
}

export default Profile;