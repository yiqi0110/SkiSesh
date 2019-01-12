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

    if (props.makeOrFind === "make") {
        
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
                        <label className="input-group-text">Resort You Would Like To Sesh</label>
                        <input type="text" className="input-group-prepend" list="resorts" id="resort-datalist" onChange={props.handleChange}/>
                        <datalist id="resorts">
                            {props.resorts.map((element) => 
                            <option value={element}></option>
                            )}
                        </datalist>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Select the skill level that you'd like to ride with.</label>
                        <select className="input-group-prepend" id="experienceLevel" onChange={props.handleChange}>
                            {difficulty.map((diff) =>
                                <option value={diff.URL} key={diff.title}>{diff.title}</option>
                            )}
                        </select>
                    </div>
                    <input id="post-sesh" className="btn btn-primary" type="button" value="Make a Sesh" onClick={props.handleClick}></input>
                </form>
            </div>
        )
    } else if (props.makeOrFind === "find") {

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
                        <label className="input-group-text">Resort You Would Like To Sesh</label>
                        <input type="text" className="input-group-prepend" list="resorts" id="resort-datalist" onChange={props.handleChange}/>
                        <datalist id="resorts">
                            {props.resorts.map((element) => 
                            <option value={element}></option>
                            )}
                        </datalist>
                    </div>
                    <input id="findSesh" className="btn btn-primary" type="button" value="Find a Sesh"></input>
                </form>
            </div>
        )

    }
    
}

export default CollapseForm;