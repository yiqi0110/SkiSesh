import React from "react";
import "../../style/Edit.scss";

function Edit(props) {
    return (
            <div className="sidebarContainer">
                <div className="jumbotron">
                    <h1 className="display-4">Don't worry, we got all your seshes right here!</h1> 
                    {
                        props.seshResults.map((data, index) => (
                            <div className="card">
                            <div className="card-header" key={index}>
                                <p>User: {data.username}</p>
                                <p>Date Range For The Sesh: {data.startDate.slice(0, 10)} to {data.endDate.slice(0, 10)}</p>
                                <p className="card-text">Resort: {data.resort}</p>
                                <p className="card-text">Skill Level: <img className="skill" src={data.skill} alt={data.skill} width="30" height="30"></img></p>
                            </div>
                            <div className="card-body d-flex justify-content-center">
                                <div className="container">
                                    <div className="row d-flex justify-content-center">
                                        <ul>
                                            {
                                                data.comments.map((comment, i) => ( 
                                                    <div className="comment" key={i}>
                                                        <p>User: {comment.username}</p>
                                                        <p>Comment: {comment.comment}</p>
                                                        <hr></hr>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <form>
                                            <div className="form-group">
                                                <div className="form-row">
                                                    <div className="col-7">
                                                        <textarea className="form-control" type="text" placeholder="Comment" onChange={props.get} />
                                                    </div>
                                                    <div className="col">
                                                        <input id={data._id} className="btn btn-primary" type="button" onClick={props.release} value="Comment" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )
        }
            
export default Edit;