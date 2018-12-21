import React from "react";
import CollapseForm from "./CollapseForm";
import "../../style/Jumbotron.scss";

function HomeJumbotron(props) {
    return (
<<<<<<< HEAD:src/components/home/HomeJumbotron.js
        <div className="jumbotron" style={{animation: props.jumboSink}}>
            <h1 className="display-4">Welcome to <em>The Sesh</em></h1>
            <hr className="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            <CollapseForm datePickerHelper={props.children} handleClick={props.handleClick} handleChange={props.handleChange}/>
=======
        <div className="jumbotron">
            <h1 className="display-4">Welcome to <em>The Sesh</em></h1>
            <hr className="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <CollapseFindSesh />
                <CollapseMakeSesh />
            </div>

>>>>>>> 0da1f108ff13418dd9c02f8935385444b06e3cda:client/src/components/home/HomeJumbotron.js
        </div>
    )
}

export default HomeJumbotron;