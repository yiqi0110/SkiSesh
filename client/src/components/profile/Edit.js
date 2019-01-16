import React from "react";
import "../../style/Edit.scss";

function Edit(props) {
    return (
            <div className="sidebarContainer">
                <div className="jumbotron">
                    <h1 className="display-4">This is you, you and all your seshes!</h1> 
                    <form>
                        <div className="container">
                        <div className="form-group row">
                            <label forhtml="staticEmail" className="col-sm-3 col-form-label">Current Username</label>
                            <div className="col-sm-9">
                                <input type="text" readOnly className="form-control-plaintext textAlign" id="staticUsername" value="current"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label forhtml="inputPassword" className="col-sm-3 col-form-label">New Username</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputUsername" placeholder="New Username"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label forhtml="staticEmail" className="col-sm-3 col-form-label">Current Email</label>
                            <div className="col-sm-9">
                                <input type="text" readOnly className="form-control-plaintext textAlign" id="staticEmail" value="current"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label forhtml="inputPassword" className="col-sm-3 col-form-label">New Email</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputEmail" placeholder="New Email"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label forhtml="inputPassword" className="col-sm-3 col-form-label">New Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label forhtml="inputPassword" className="col-sm-3 col-form-label">comment</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputTest" placeholder="test comment" onChange={props.get} />
                                <input type="button" onClick={props.release} value="sub"/>
                            </div>
                        </div>
                        </div>
                    </form>
                    <button type="button" className="btn btn-primary" onClick={props.showComments}>Comments</button>
                </div>
            </div>
            )
        }
            
export default Edit;