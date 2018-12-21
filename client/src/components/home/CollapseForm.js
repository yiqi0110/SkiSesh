import React from "react";

import "../../style/Collapse.scss";
// import { url } from "inspector";

const difficulty = [
        {
            URL: "./images/green.png",
            title: "Green (Beginner)",
            checked: false
        }, 
        {
            URL: "./images/blue.png",
            title: "Blue (Intermediate)",
            checked: false
        },
        {
            URL: "./images/black.png",
            title: "Black (Intermediate/Advanced)",
            checked: false
        },
        {
            URL: "./images/doubleBlack.png",
            title: "Double Black (Advanced)",
            checked: false
        },
        {
            URL: "./images/terrain.png",
            title: "Park Rat",
            checked: false
        },
        {
            URL: "./images/outOfBounds.jpg",
            title: "Out of Bounds",
            checked: false
        }
    ];

function CollapseForm(props) {
    
    return (
        <div className="collapseContainer d-flex justify-content-center">
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text">Date Range You Would Like To Sesh (MM/DD/YYYY)</span>
                    <div className="input-group-prepend">
                        {props.datePickerHelper}
                    </div>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text">Time Of Day You Would Like To Sesh</label>
                    <select className="input-group-prepend" id="timeOfDay" onChange={props.handleChange}>
                        <option value="All Day">All day</option>
                        <option value="Early Morning">Early Morning</option>
                        <option value="AfterNoon">AfterNoon</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text">Select the skill level that you'd like to ride with.</label>
                    <select className="input-group-prepend" id="experienceLevel" onChange={props.handleChange}>
                        {difficulty.map((diff) =>
                                <option value={diff.URL} key={diff.title}>{diff.title}</option>
                            )}
                    </select>
                </div>
                <input id="makeSesh" className="btn btn-primary" type="button" onClick={props.handleClick} value="Make a Sesh"></input>
                <input id="findSesh" className="btn btn-primary" type="button" onClick={props.handleClick} value="Find a Sesh"></input>
            </form>
        </div>
    )
}

export default CollapseForm;