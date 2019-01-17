import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeJumbotron from "../components/home/HomeJumbotron";
import Session from "../components/Sessions";
import API from "../utils/API";
import "../style/App.scss";
import "../style/Jumbotron.scss";

class Home extends Component {

    state = {
        startDate: null,
        startDateId: "firstday",
        endDate: null,
        endDateId: "lastDay",
        focusedInput: null,
        difficulty: "./images/green.png",
        clicked: false,
        makeSesh: false,
        seshQuery: false,
        jumboSink: null,
        resorts: [],
        makeOrFind: "",
        resort: "",
        username: "",
        seshResults: [],
        commentsResults: [],
        comment: "",
        seshID: "",
        seshDateResults: [],
        seshResortResults: [],
        resortSearch: null,
        dateSearch: null
    }

    componentDidMount() {
        this.handleResorts();
        this.getUsername();
        this.getCommentFromUser();
    }
    

    handleDelay() {
        setTimeout(
            function () {
                this.setState({ clicked: true });
                this.grabComments();
            }.bind(this),
            2000
        )
    }

    handleClick = (e) => {
        const btnID = e.target.id;
        if (btnID === "makeSesh") {
            this.setState({ makeSesh: true, makeOrFind: "make" });
        } else if (btnID === "findSesh") {
            this.setState({ makeSesh: true, makeOrFind: "find" });
            // console.log(this.state.startDate._d);  // brings back the first date

        } else if (btnID === "post-sesh") {
            if ((this.state.startDate === null || this.state.endDate === null) || (this.state.resort === "")) {
                return;
            }
            this.handlePostSesh();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out" });
        } else if (btnID === "get-sesh") {
            if ((this.state.startDate === null || this.state.endDate === null) || (this.state.resort === "")) {
                return;
            }
            this.handleFindSesh();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out", seshQuery: true });
        } else if (btnID === "resort-search") {
            // this.onClick("resort-search");
            this.handleFindSeshByResort();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out", seshQuery: true });
        } else if (btnID === "date-search") {
            // this.onClick("date-search");
            this.handleFindSeshByDate();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out", seshQuery: true });
        }
        else {
            return console.log("no button is clicked");
        }
    }

    handleChange = (e) => {
        // console.log(typeof e.target.id);
        // console.log(e.target.value);
        if (e.target.id === "resort-datalist") {
            this.setState({ resort: e.target.value })
        } else if (e.target.id === "experienceLevel") {
            this.setState({ difficulty: e.target.value })
        } else {
            console.log("So sorry, something went wrong.");
        }
    }

    handlePostSesh = () => {
        // event.preventDefault();
        API.postSesh({
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            resort: this.state.resort,
            skill: this.state.difficulty,
            username: this.state.username
        })
    }

    handleFindSesh = () => {
        API.findSesh({
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            resort: this.state.resort
        }).then(res => {
            this.setState({ seshResults: res.data });
        })
    }

    handleFindSeshByDate = () => {
        API.findSeshByDate({
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }).then(res => {
            this.setState({
                seshDateResults: res.data,
                dateSearch: true,
                resortSearch: false
            });
        })
    }

    handleFindSeshByResort = () => {
        API.findSeshByResort({
            resort: this.state.resort
        }).then(res => {
            this.setState({
                seshResortResults: res.data,
                dateSearch: false,
                resortSearch: true
            });
        })
    }


    handleResorts = () => {
        API.getResorts({}).then(res => {
            console.log(res.data)
            let resortArr = [];
            for (var i = 0; i < res.data.length; i++){
                resortArr.push(res.data[i].SkiArea.name + " (" + res.data[i].Region[0].name + ")")
                // console.log(res.data[i].Region[0].name + "----" + i)
            }
            this.setState({ resorts: resortArr })
        })
    }

    getUsername = () => {
        let user = sessionStorage.getItem('username');
        this.setState({username: user});
        if (this.state.username != "") {
            this.handleGrabCom();

        }
    }

    getCommentFromUser = (e) => {
        if (e){
            let comment = e.target.value;
            this.setState({comment: comment});
        }
    }

    grabComments() {
        console.log(this.state.username)
        API.getComments({
            sesh: this.state.seshID
        })
        .then(res=>{
            console.log(res);
            this.setState({commentsResults: res.data});
        })
        .catch(err=>console.log(err))
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
        console.log("worked");
        this.setState({ username: user });
    }

    onClick(e) {
        this.props.toPage(e);
    }

    render() {
        return (
            <div className="Home">
                <Navbar link="to profile" toPage={this.props.toPage} />
                <div className="holder d-flex justify-content-center">
                    {this.state.clicked ?
                        // put left side bar for mod here
          // trevors
                        <Session handleClick={this.handleClick} commentsResults={this.state.commentsResults} handleGrab={this.grabComments} get={this.getCommentFromUser} release={this.releaseComment} comment4post={this.state.comment} seshQuery={this.state.seshQuery} seshResults={this.state.seshResults} startDate={this.state.startDate} endDate={this.state.endDate} difficulty={this.state.difficulty} resort={this.state.resort} />
          // matts
                        <Session handleClick={this.handleClick} seshQuery={this.state.seshQuery} seshResults={this.state.seshResults} seshDateResults={this.state.seshDateResults} seshResortResults={this.state.seshResortResults} startDate={this.state.startDate} endDate={this.state.endDate} difficulty={this.state.difficulty} resort={this.state.resort} dateSearch={this.state.dateSearch} resortSearch={this.state.resortSearch}/>
                        :
                        <HomeJumbotron seshQuery={this.state.seshQuery} postSesh={this.handlePostSesh} makeOrFind={this.state.makeOrFind} jumboSink={this.state.jumboSink} handleChange={this.handleChange} handleClick={this.handleClick} resorts={this.state.resorts} makeSesh={this.state.makeSesh}>
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                minimumNights={0}
                            />
                        </HomeJumbotron>}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;