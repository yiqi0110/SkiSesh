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
        timeOfDay: "All Day",
        clicked: false,
        makeSesh: false,
        jumboSink: null,
        resorts: [],
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
        if (this.state.startDate === null || this.state.endDate === null) {
            return;
        }
        if (btnID === "makeSesh") {
            // POST here
            this.handleDelay();
            this.setState({ jumboSink: "jumboSink 2s ease-out" });
            this.handlePostSesh();
        } else if (btnID === "findSesh") {
            // GET here
            this.handleDelay();
            this.setState({ makeSesh: true, jumboSink: "jumboSink 2s ease-out" });
            console.log(this.state.startDate._d);  // brings back the first date
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

    handleResorts = () => {
        API.getResorts({}).then(res => {
            const resortData = (res.data);
            let resortArr = [];
            // console.log(resortData);

            // this.setState({resorts:[...this.state.resorts, resortData[0]]});
            // console.log(this.state.resorts);
            const entries = Object.entries(resortData[0]);
            entries.pop();
            // console.log(entries);
            for (const key of entries) {
                resortArr.push(key[1].SkiArea.name);
            }
            // resortArr.pop();
            // console.log(resortArr);
            // {
            //     resortArr.map(item =>
            //         this.setState({
            //             resorts: <option value={item.name}></option>
            //         })
            //     )
            // }
            // resortArr.map((element) => {
            //     // <option value={element}></option>
            //     console.log(element)
            // })
            this.setState({ resorts: resortArr})

            // console.log(this.state.resorts)
            // for(var i = 0; i < (resortArr.length -1); i++){
            //     // console.log(resortArr[i].name);
            //     this.setState({resorts:[...this.state.resorts, resortArr[i].name]})
            // }
            // console.log(this.state.resorts);
        })
    }

    render() {
        return (
            <div className="Home">
                <Navbar link="to profile" toPage={this.props.toPage} />
                <div className="holder d-flex justify-content-center">
                    {this.state.clicked ?
                        // put left side bar for mod here
                        <Session sesh={this.state.makeSesh} startDate={this.state.startDate} endDate={this.state.endDate} difficulty={this.state.difficulty} timeOfDay={this.state.timeOfDay} />
                        :
                        <HomeJumbotron jumboSink={this.state.jumboSink} handleChange={this.handleChange} handleClick={this.handleClick} resorts={this.state.resorts}>
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