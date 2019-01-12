import React from "react";
import "../../style/Jumbotron.scss";
import CollapseForm from "./CollapseForm";

function HomeJumbotron(props) {
    return (
        <div className="jumbotron" style={{animation: props.jumboSink}}>
            <h1 className="display-4">Welcome to <em>The Sesh</em></h1>
            <hr className="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            {props.makeSesh ? 
                <CollapseForm postSesh={props.postSesh} makeOrFind={props.makeOrFind} datePickerHelper={props.children} handleChange={props.handleChange} resorts={props.resorts} makeSesh={props.makeSesh} handleClick={props.handleClick}/>
            :
            <div>
                <input id="makeSesh" className="btn btn-primary" type="button" onClick={props.handleClick} value="Make a Sesh"></input>
                <input id="findSesh" className="btn btn-primary" type="button" onClick={props.handleClick} value="Find a Sesh"></input>
            </div>
            }
        </div>
    )
}

export default HomeJumbotron;