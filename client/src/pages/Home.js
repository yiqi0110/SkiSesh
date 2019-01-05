import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeJumbotron from "../components/home/HomeJumbotron";
import Session from "../components/Sessions";
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
        timeOfDay: "All Day",
        clicked: false,
        makeSesh: false,
        jumboSink: null,
    }

    handleDelay () {
        setTimeout(
            function() {
                this.setState({clicked: true});
            }.bind(this),
            2000
        )
    }

    handleClick = (e) => {
        const btnID = e.target.id;
        if (this.state.startDate === null || this.state.endDate === null) {
            return;
        }
        if (btnID === "makeSesh") {
            // GET here
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out" });
        } else if (btnID === "findSesh") {
            // POST here
            this.handleDelay();
            this.setState({ makeSesh: true, jumboSink: "jumboSink 2s ease-out"});
            console.log(this.state.startDate._d);  // brings back the first date
        }
        else {
            return console.log("no button is clicked");
        }
    }

    handleChange = (e) => {
        console.log(typeof e.target.id);
        console.log(e.target.value);
        if (e.target.id === "timeOfDay") {
            this.setState({timeOfDay: e.target.value})
        } else if (e.target.id === "experienceLevel") {
            this.setState({difficulty: e.target.value})
        } else {
            console.log("So sorry, something went wrong.");
        }
    }



    render() {
        return (
            <div className="Home">
                <Navbar link="profile" />
                <div className="holder d-flex justify-content-center">
                {this.state.clicked ?
                    // put left side bar for mod here
                    <Session sesh={this.state.makeSesh} startDate={this.state.startDate} endDate={this.state.endDate} difficulty={this.state.difficulty} timeOfDay={this.state.timeOfDay}/>
                    :
                    <HomeJumbotron jumboSink={this.state.jumboSink} handleChange={this.handleChange} handleClick={this.handleClick} >
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            />
                    </HomeJumbotron>}
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Home;