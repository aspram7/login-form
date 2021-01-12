import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import user from "../../../assets/icons/user.svg";
import email from "../../../assets/icons/email.svg";
import lock from "../../../assets/icons/lock.svg";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Signup.css";

const Signup = (props) => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({ ...inputs, [name]: value });
    };

    const onClickButton = () => {
        const obj = { name: "", email: "", password: "", confirmPassword: "" };
        if (inputs.name && validateEmail(inputs.email) && validatePassword(inputs.password) && inputs.password === inputs.confirmPassword) {
            setErrors(obj);
            alert(`Name: ${inputs.name}\nEmail: ${inputs.email}\nPassword: ${inputs.password}`);
        } else {
            switch (false) {
                case !!inputs.name:
                    setErrors({ ...obj, name: "Name can't be empty" });
                    break;
                case validateEmail(inputs.email):
                    setErrors({ ...obj, email: "Please enter a valid email address." });
                    break;
                case validatePassword(inputs.password):
                    setErrors({ ...obj, password: "Your password must be at least 8 characters" });
                    break;
                case inputs.password === inputs.confirmPassword:
                    setErrors({ ...obj, confirmPassword: "Passwords don't match" });
                    break;
                default:
                    setErrors(obj);
            }
        }
    };

    const onRedirect = () => {
        props.onRedirect("login");
    };

    return (
        <div className="signup-container">
            <h1>Signup Form</h1>
            <Input
                type="text"
                img={user}
                name="name"
                styles={{ marginTop: "40px" }}
                placeholder="Name"
                errorMessage={errors.name}
                value={inputs.name}
                onChange={onChange}
            />
            <Input
                type="text"
                img={email}
                name="email"
                styles={{ marginTop: "30px" }}
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
            <Input
                type="password"
                img={lock}
                name="confirmPassword"
                styles={{ marginTop: "30px" }}
                placeholder="Confirm Password"
                errorMessage={errors.confirmPassword}
                value={inputs.confirmPassword}
                onChange={onChange}
            />
            <Button name="Sign up" styles={{ marginTop: "40px" }} onClick={onClickButton} />
            <div className="login">
                Already have an account?
                <span className="blue-link" onClick={onRedirect}>
                    Login here
                </span>
            </div>
        </div>
    );
};

export default Signup;
