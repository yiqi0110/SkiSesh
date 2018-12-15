import React from "react";
import CollapseForm from "./CollapseForm";
import "../../style/Collapse.scss";


function CollapseMakeSesh() {
    return (
        <div className="collapseContainer">
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseMake" role="button" aria-expanded="false" aria-controls="collapseExample">
                Make a Sesh
            </a>
            <CollapseForm collapseID="#collapseMake"/>
        </div>
    )
}

export default CollapseMakeSesh;