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
        comment: "",
        loading: true
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
                this.setState({loading: false})
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
        e.preventDefault();
        let seshID = e.target.id;
        this.setState({seshID: seshID});
        API.postComment({
            username: this.state.username,
            comment: this.state.comment,
            sesh: seshID,
        })
        .then(res=>{
            console.log(res);
            this.handleFindSesh();
            this.setState({comment: ""});
        })
        .catch(err=>console.log(`heres the issue: ${err}`))
    }

    render () {
        return (
            <div className="profileHolder">
            <Navbar page="profile" toPage={this.props.toPage}/>
            <Edit loading={this.state.loading} userInput={this.state.comment} seshQuery={true} get={this.getCommentFromUser} release={this.releaseComment} seshResults={this.state.seshResults} />
            <Footer />
            </div>
        )
    }
}

export default Profile;