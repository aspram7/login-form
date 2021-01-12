import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";

import email from "../../../assets/icons/email.svg";
import lock from "../../../assets/icons/lock.svg";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Login.css";

const Login = (props) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [checkbox, setCheckbox] = useState(false);

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({ ...inputs, [name]: value });
    };

    const onChangeCheckbox = () => {
        setCheckbox(!checkbox);
    };

    const onClickButton = () => {
        if (validateEmail(inputs.email) && validatePassword(inputs.password)) {
            setErrors({ email: "", password: "" });
            alert(`Email: ${inputs.email}\nPassword: ${inputs.password}\nRemember Me: ${checkbox}`);
        } else {
            if (!validateEmail(inputs.email)) {
                setErrors({ email: "Please enter a valid email address.", password: "" });
            } else if (!validatePassword(inputs.password)) {
                setErrors({ email: "", password: "Your password must be at least 8 characters" });
            }
        }
    };

    const handleForgotPassword = () => {
        let email = prompt("Please enter your email", "");
        if (!validateEmail(email) && email !== null) {
            handleForgotPassword();
        }
    };

    const onRedirect = () => {
        props.onRedirect("signup");
    };

    return (
        <div className="login-container">
            <h1>Login Form</h1>
            <Input
                type="text"
                img={email}
                name="email"
                styles={{ marginTop: "40px" }}
                placeholder="Email"
                errorMessage={errors.email}
                value={inputs.email}
                onChange={onChange}
            />
            <Input
                type="password"
                img={lock}
                name="password"
                styles={{ marginTop: "30px" }}
                placeholder="Password"
                errorMessage={errors.password}
                value={inputs.password}
                onChange={onChange}
            />
            <div className="checkbox-and-link">
                <Checkbox checked={checkbox} onChange={onChangeCheckbox} />
                <div className="blue-link" onClick={handleForgotPassword}>
                    Forgot Password?
                </div>
            </div>
            <Button name="Login" styles={{ marginTop: "10px" }} onClick={onClickButton} />
            <div className="signup">
                Don't have an account?
                <span className="blue-link" onClick={onRedirect}>
                    Signup Now
                </span>
            </div>
        </div>
    );
};

export default Login;
