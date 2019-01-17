import React from "react";
import "../../style/Jumbotron.scss";

const seshByResort = (props) => {
    return (
        props.seshResortResults.map((data) =>
            <div className="card">
                <div className="card-header">
                    <p>User: {data.username}</p>
                    <p>Date Range For The Sesh: {data.startDate.slice(0, 10)} to {data.endDate.slice(0, 10)}</p>
                    <p className="card-text">Resort: {data.resort}</p>
                    <p className="card-text">Skill Level: <img className="skill" src={data.skill}></img></p>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <ul>
                                {
                                    data.comments.map((comment) => ( 
                                        <div className="comment">
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
                                            <textarea class="form-control" type="text" placeholder="Comment" onChange={props.get} />
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
        )
    )
}


export default seshByResort;