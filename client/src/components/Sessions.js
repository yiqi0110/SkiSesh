import React from "react";
import "../style/Jumbotron.scss";
import API from "../utils/API";


function Sessions(props) {
    console.log(props);

    let startDate = JSON.stringify(props.startDate._d).slice(1, 10);
    let endDate = JSON.stringify(props.endDate._d).slice(1, 10);

    // handlePostSesh = event => {
    //     event.preventDefault();
    //     API.postSesh({
            
    //     })
    // }


    return (
        <div className="sessionsContainer d-flex justify-content-center">
            {props.sesh ?
                // map through results
                <div className="card">
                    <div className="card-header">
                        Look At All Those Seshs! <br></br>
                        Date Range For Your Sesh: {startDate} to {endDate}
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Comments
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* comments regarding the post */}
                                <span>comment 1</span>
                                <span>comment 2</span>
                                <span>comment 3</span>
                                <span>comment 4</span>
                            </div>
                        </div>

                    </div>
                </div>
                :
                <div className="card">
                    <div className="card-header">
                        Sweet! You Made A Sesh! <br></br>
                        Date Range For Your Sesh: {startDate} to {endDate}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.comments ? "Dang. . . Look At All Those Comments!" : <a href="http://shredsauce.com/" target="_blank" rel="noopener noreferrer">No Comments? No Worries, Just Play Shredsauce While You Wait. But Only IF You Have Firefox.</a>}</h5>
                        <div className="card-text">
                            <li>Time Of Day: {props.timeOfDay}</li>
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