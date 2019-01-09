import React from "react";
import "../../style/Jumbotron.scss";
import CollapseForm from "./CollapseForm";

function HomeJumbotron(props) {
    return (
        <div className="jumbotron" style={{animation: props.jumboSink}}>
            <h1 className="display-4">Welcome to <em>The Sesh</em></h1>
            <hr className="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            <CollapseForm datePickerHelper={props.children} handleClick={props.handleClick} handleChange={props.handleChange}/>
        </div>
    )
}

export default HomeJumbotron;