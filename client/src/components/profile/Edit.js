import React from "react";
import "../../style/Edit.scss";
import CollapsePage from "../DropDown";

function Edit(props) {
    return (
            <div className="sidebarContainer">
                <div className="jumbotron">
                    <h1 className="display-4">Don't worry, we got all your seshes right here!</h1>
                    <hr className="my-4"></hr>
                    {
                        props.loading ?
                        <div className="lds-facebook"><div></div><div></div><div></div></div> 
                        :
                        <div>{
                            props.seshResults.map((data, index) => (
                                <div className="card sesh-card">
                                <div className="card-header" key={index}>
                                    <p>User: {data.username}</p>
                                    <p>Date Range For The Sesh: {data.startDate.slice(0, 10)} to {data.endDate.slice(0, 10)}</p>
                                    <p className="card-text">Resort: {data.resort}</p>
                                    <p className="card-text">Skill Level: <img className="skill" src={data.skill} alt={data.skill} width="30" height="30"></img></p>
                                </div>
                                <div className="card-body d-flex justify-content-center">
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">
                                            <CollapsePage comments={data.comments}/>
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
                        ))}</div>
                        }
                </div>
            </div>
            )
        }
            
export default Edit;