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
        resort: ""
    }

    componentDidMount() {
        this.handleResorts();
    }

    handleDelay() {
        setTimeout(
            function () {
                this.setState({ clicked: true });
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
        } else if (btnID === "post-sesh"){
            if ((this.state.startDate === null || this.state.endDate === null) || (this.state.resort === "")) {
                return;
            }
            this.handlePostSesh();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out" });
        } else if (btnID === "get-sesh"){
            if ((this.state.startDate === null || this.state.endDate === null) || (this.state.resort === "")) {
                return;
            }
            this.handleFindSesh();
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out", seshQuery: true });
        }
        else {
            return console.log("no button is clicked");
        }
    }

    handleChange = (e) => {
        console.log(typeof e.target.id);
        console.log(e.target.value);
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
            skill: this.state.difficulty
        })
    }

    handleFindSesh = () => {
        API.findSesh({
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            resort: this.state.resort
        }).then(res => {
            console.log(res);
        })
    }


    handleResorts = () => {
        API.getResorts({}).then(res => {
            const resortData = (res.data);
            let resortArr = [];
            const entries = Object.entries(resortData[0]);
            entries.pop();
            for (const key of entries) {
                resortArr.push(key[1].SkiArea.name);
            }
            this.setState({ resorts: resortArr})
        })
    }

    render() {
        return (
            <div className="Home">
                <Navbar link="to profile" toPage={this.props.toPage} />
                <div className="holder d-flex justify-content-center">
                    {this.state.clicked ?
                        // put left side bar for mod here
                        <Session seshQuery={this.state.seshQuery} startDate={this.state.startDate} endDate={this.state.endDate} difficulty={this.state.difficulty} resort={this.state.resort} />
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