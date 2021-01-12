import React, { Component } from "react";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";

import email from "../../../assets/icons/email.svg";
import lock from "../../../assets/icons/lock.svg";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "",
                password: "",
            },
            checkbox: false,
        };
        this.handleInputs = this.handleInputs.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.onRedirect = this.onRedirect.bind(this);
    }

    handleInputs(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClickButton() {
        if (validateEmail(this.state.email) && validatePassword(this.state.password)) {
            alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
        } else {
            if (!validateEmail(this.state.email)) {
                this.setState({
                    errors: {
                        email: "Please enter a valid mail address.",
                        password: "",
                    },
                });
            } else if (!validatePassword(this.state.password)) {
                this.setState({
                    errors: {
                        password: "Your password must be at least 8 characters.",
                        email: "",
                    },
                });
            }
        }
    }

    onChangeCheckbox() {
        this.setState((prevState) => {
            return {
                ...prevState,
                checkbox: !prevState.checkbox,
            };
        });
    }

    handleForgotPassword() {
        let email = prompt("Please enter your Email:");
        if (!validateEmail(email) && email !== null) {
            this.handleForgotPassword();
        }
    }

    onRedirect() {
        this.props.onRedirect("signup");
    }

    render() {
        return (
            <div className="login-container">
                <h1>Login Form</h1>
                <Input
                    type="text"
                    img={email}
                    name="email"
                    styles={{ marginTop: "40px" }}
                    placeholder="Email"
                    errorMessage={this.state.errors.email}
                    value={this.state.email}
                    onChange={this.handleInputs}
                />
                <Input
                    type="password"
                    img={lock}
                    name="password"
                    styles={{ marginTop: "30px" }}
                    placeholder="Password"
                    errorMessage={this.state.errors.password}
                    value={this.state.password}
                    onChange={this.handleInputs}
                />
                <div className="checkbox-and-link">
                    <Checkbox checked={this.state.checkbox} onChange={this.onChangeCheckbox} />
                    <div className="blue-link" onClick={this.handleForgotPassword}>
                        {" "}
                        Forgot Password?
                    </div>
                </div>
                <Button name="Login" styles={{ marginTop: "10px" }} onClick={this.onClickButton} />
                <div className="signup">
                    Don't have an account?
                    <span className="blue-link" onClick={this.onRedirect}>
                        Signup Now
                    </span>
                </div>
            </div>
        );
    }
}

export default Login;
