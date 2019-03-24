import React from "react";
import SeshByResort from "../components/FindSesh/SeshByResort";
import SeshByDate from "../components/FindSesh/SeshByDate";
import lifecycle from 'react-pure-lifecycle';
import CollapsePage from "./DropDown";
import "../style/Jumbotron.scss";

const methods = {
    componentDidMount(props) {
        console.log(props);
    }
}

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
                            <div>{
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
                                                {/* <div className="row d-flex justify-content-center">
                                                    <button className="btn btn-primary message">Direct Message</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>
                        )}
                    {/* Ternary statement for date search or resort search */}
                    {props.dateSearch ? <SeshByDate seshDateResults={props.seshDateResults} /> : <SeshByResort seshResortResults={props.seshResortResults} />}
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
                        <span>Check your profile to view any comments</span>
                    </div>
                </div>}
        </div>
    )
}

export default lifecycle(methods)(Sessions);