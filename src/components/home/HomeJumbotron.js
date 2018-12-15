import React from "react";
import CollapseMakeSesh from "./CollapseMakeSesh";
import CollapseFindSesh from "./CollapseFindSesh";

function HomeJumbotron() {

    // make if for make sesh vs find sesh

    return (
        <div class="jumbotron">
            <h1 class="display-4">Welcome to <em>The Sesh</em></h1>
            <hr class="my-4"></hr>
            <p>To find a sesh, click <i>Find a Sesh</i> or to create your own, click <i>Make a Sesh</i></p>
            <div class="btn-group" role="group" aria-label="Basic example">
                <CollapseFindSesh />
                <CollapseMakeSesh />
            </div>

        </div>
    )
}

export default HomeJumbotron;