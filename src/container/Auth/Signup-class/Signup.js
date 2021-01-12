import React, { Component } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import user from "../../../assets/icons/user.svg";
import email from "../../../assets/icons/email.svg";
import lock from "../../../assets/icons/lock.svg";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Signup.css";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
        };

        this.onChange = this.onChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.onRedirect = this.onRedirect.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClickButton() {
        const obj = { name: "", email: "", password: "", confirmPassword: "" };
        if (
            this.state.name &&
            validateEmail(this.state.email) &&
            validatePassword(this.state.password) &&
            this.state.password === this.state.confirmPassword
        ) {
            this.setState({ errors: obj });
            alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nPassword: ${this.state.password}`);
        } else {
            switch (false) {
                case !!this.state.name:
                    this.setState({ errors: { ...obj, name: "Name can't be empty" } });
                    break;
                case validateEmail(this.state.email):
                    this.setState({ errors: { ...obj, email: "Please enter a valid email address." } });
                    break;
                case validatePassword(this.state.password):
                    this.setState({ errors: { ...obj, password: "Your password must be at least 8 characters" } });
                    break;
                case this.state.password === this.state.confirmPassword:
                    this.setState({ errors: { ...obj, confirmPassword: "Passwords don't match" } });
                    break;
                default:
                    this.setState({ errors: obj });
            }
        }
    }

    onRedirect() {
        this.props.onRedirect("login");
    }

    render() {
        return (
            <div className="signup-container">
                <h1>Signup Form</h1>
                <Input
                    type="text"
                    img={user}
                    name="name"
                    styles={{ marginTop: "40px" }}
                    placeholder="Name"
                    errorMessage={this.state.errors.name}
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <Input
                    type="text"
                    img={email}
                    name="email"
                    styles={{ marginTop: "30px" }}
                    placeholder="Email"
                    errorMessage={this.state.errors.email}
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <Input
                    type="password"
                    img={lock}
                    name="password"
                    styles={{ marginTop: "30px" }}
                    placeholder="Password"
                    errorMessage={this.state.errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <Input
                    type="password"
                    img={lock}
                    name="confirmPassword"
                    styles={{ marginTop: "30px" }}
                    placeholder="Confirm Password"
                    errorMessage={this.state.errors.confirmPassword}
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                />
                <Button name="Sign up" styles={{ marginTop: "40px" }} onClick={this.onClickButton} />
                <div className="login">
                    Already have an account?
                    <span className="blue-link" onClick={this.onRedirect}>
                        Login here
                    </span>
                </div>
            </div>
        );
    }
}

export default Signup;
