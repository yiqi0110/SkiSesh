import React from "react";
import CollapseForm from "./CollapseForm";

function HomeJumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome to <em>The Sesh</em></h1>
            <hr className="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <div className="collapseContainer">
                    <a id="collapseToMake" className="btn btn-primary" data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={props.handleCollapseClick}>
                        Make a Sesh
                    </a>
                    <a id="collapseToFind" className="btn btn-primary" data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={props.handleCollapseClick}>
                        Find a Sesh
                    </a>
                </div>
            </div>
            <CollapseForm datePickerHelper={props.children}/>
        </div>
    )
}

export default HomeJumbotron;