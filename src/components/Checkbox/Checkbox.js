import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox" checked={props.checked} onChange={props.onChange} />
            <label htmlFor="checkbox">Remember Me</label>
        </div>
    );
};

export default Checkbox;
