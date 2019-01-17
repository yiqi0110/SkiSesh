import React from "react";
import SeshByResort from "../components/FindSesh/SeshByResort";
import SeshByDate from "../components/FindSesh/SeshByDate";
import "../style/Jumbotron.scss";

const Sessions = (props) => {
    // console.log(props);


    let startDate = JSON.stringify(props.startDate._d).slice(1, 11);
    let endDate = JSON.stringify(props.endDate._d).slice(1, 11);

    return (
        <div className="sessionsContainer">
            {props.seshQuery ?
                <div>
                    {/* If there are no exact date and resort matches */}
                    {(props.seshResults.length === 0) ? (
                        <div className="card no-match-card">
                            <div className="card-header">
                                <h5>Looks like there are no exact matches, try broadening your search!</h5>
                            </div>
                            <div className="card-body d-flex justify-content-center">
                                <button type="button" className="btn btn-primary" id="resort-search" onClick={props.handleClick}>Resort Only Search</button>
                                <br></br>
                                <button type="button" className="btn btn-primary" id="date-search" onClick={props.handleClick}>Date Only Search</button>
                            </div>
                        </div>

                    ) : (
                            // else map through the data and create cards for each match
                            props.seshResults.map((data) =>
                                <div className="card">
                                    <div className="card-header">
                                        <p>User: {data.username}</p>
                                        <p>Date Range For The Sesh: {data.startDate.slice(0, 10)} to {data.endDate.slice(0, 10)}</p>
                                        <p className="card-text">Resort: {data.resort}</p>
                                        <p className="card-text">Skill Level: <img className="skill" src={data.skill} alt={data.skill}></img></p>
                                    </div>
                                    <div className="card-body d-flex justify-content-center">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center">
                                                <ul>
                                                    {
                                                        props.commentsResults.map((commentData) => (
                                                            <div className="comment">
                                                                <p>User: {commentData.username}</p>
                                                                <p>Comment: {commentData.comment}</p>
                                                                <hr></hr>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="row">
                                                <form>
                                                    <div className="form-group row">
                                                        <label forhtml="inputPassword" className="col-sm-3 col-form-label">comment</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputTest" placeholder="test comment" onChange={props.get} />
                                                            <input id={data._id} type="button" onClick={props.release} value="submit a comment" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                        {/* Ternary statement for date search or resort search */}
                        {props.dateSearch ? <SeshByDate seshDateResults={props.seshDateResults}/> : <SeshByResort seshResortResults={props.seshResortResults}/>}
                </div>
                :
                <div className="card">
                    <div className="card-header">
                        Sweet! You Made A Sesh! <br></br>
                        Date Range For Your Sesh: {startDate} to {endDate}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.comments ? "Dang. . . Look At All Those Comments!" : <a href="http://shredsauce.com/" target="_blank" rel="noopener noreferrer">No Comments? No Worries, Just Play Shredsauce While You Wait!</a>}</h5>
                        <div className="card-text">
                            <li>Resort: {props.resort}</li>
                            <li>Skill Preference: <img src={props.difficulty} alt={props.difficulty} width="35rem" /></li>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Comments
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* comments regarding the post */}
                                <span>comment 1</span><br></br>
                                <span>comment 2</span><br></br>
                                <span>comment 3</span><br></br>
                                <span>comment 4</span><br></br>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Sessions;