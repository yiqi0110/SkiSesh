import React from "react";
import CollapseForm from "./CollapseForm";
import "../../style/Collapse.scss";


function CollapseFindSesh() {
    return (
        <div className="collapseContainer">
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseFind" role="button" aria-expanded="false" aria-controls="collapseExample">
                Find a Sesh
            </a>
            <CollapseForm collapseID="#collapseFind"/>
        </div>
    )
}

export default CollapseFindSesh;