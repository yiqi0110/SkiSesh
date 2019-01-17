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
        )
    )
}


export default seshByResort;