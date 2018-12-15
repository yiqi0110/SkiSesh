import React from "react";

import "../../style/Collapse.scss";

function CollapseForm(props) {
    console.log(props);
    return (
        <div className="collapse" id="collapse">
            <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date Range You Would Like to Sesh</span>
                        {props.datePickerHelper}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}

export default CollapseForm;