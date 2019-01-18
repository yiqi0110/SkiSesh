import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class CollapsePage extends Component {
state = {
  collapseID: ""
}

toggleCollapse = (collapseID) => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
    <>
      <MDBBtn color="primary" onClick={()=> this.toggleCollapse("basicCollapse")}
        style={{ marginBottom: "1rem" }}
        >
        View Comments ({this.props.comments.length})
      </MDBBtn>
      <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
      <p>
        {
            (this.props.comments.length > 0)
            ?
            (
                this.props.comments.map((comment, i) => ( 
                    <div className="row">
                    User: {comment.username} | Comment({i}): {comment.comment}
                    </div>
                
                ))
            )
            :
            (
                <>Sorry no comments</>
            )
        }
      </p>
      </MDBCollapse>
    </>

    );
  }
}

export default CollapsePage;