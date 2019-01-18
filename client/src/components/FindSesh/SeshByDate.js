import React from "react";
import "../../style/Jumbotron.scss";
import CollapsePage from "../DropDown";

function seshByDate(props) {
    return (
        props.seshDateResults.map((data, index) =>
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
                            <CollapsePage comments={data.comments} />
                        </div>
                        <div className="row d-flex justify-content-center">
                            <form>
                                <div className="form-group">
                                    <div className="form-row d-felx justify-content-center">
                                        <div className="col">
                                            <textarea rows="3" cols="80" className="form-control" type="text" placeholder="Comment" value={props.userInput} onChange={props.get} />
                                            <div className="col justify-self-end">
                                                <input id={data._id} className="btn btn-primary" type="submit" onClick={props.release} value="Comment" />
                                            </div>
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

export default seshByDate;