import React, { useState } from "react";

import eyeOpen from "../../assets/icons/eye.svg";
import eyeClose from "../../assets/icons/eye-slash.svg";

import "./Input.css";

const Input = (props) => {
    const [eye, setEye] = useState(false);

    const onChangeEye = () => {
        setEye(!eye);
    };

    return (
        <div className="input-box" style={props.styles}>
            <input
                type={eye ? "text" : props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <img src={props.img} alt="icon" />
            {props.type === "password" && <img src={eye ? eyeOpen : eyeClose} className="eye-icon" alt="icon" onClick={onChangeEye} />}
            <p>{props.errorMessage}</p>
        </div>
    );
};

export default Input;
