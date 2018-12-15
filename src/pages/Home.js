import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeJumbotron from "../components/home/HomeJumbotron"
import '../style/App.scss';

const styleHome = {
    backgroundImage: "url('./images/homeBackground.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

class Home extends Component {

    state = {
        startDate: null,
        startDateId: "12/12/2019",
        endDate: null,
        endDateId: "12/14/2019",
        focusedInput: null,
    }

    // make if for make sesh vs find sesh
    handleCollapseClick = (e) => {
        console.log(e.target);
    }

    render() {
        return (
            <div className="Home">
                <Navbar />
                <HomeJumbotron handleCollapseClick={this.handleCollapseClick}>
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </HomeJumbotron>
                <Footer />
            </div>
        );
    }
}

export default Home;