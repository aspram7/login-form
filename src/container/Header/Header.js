import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import "./Header.scss";

import logo from "../../assets/logo/logo.png";

class Header extends Component {
    constructor() {
        super();
        this.onRedirect = this.onRedirect.bind(this);
    }

    onRedirect(path) {
        this.props.onRedirect(path);
    }

    render() {
        return (
            <div className="header">
                <div className="container header-container">
                    <div className="logo" onClick={() => this.onRedirect("products")}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="d-flex">
                        <div className="menu">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Companies</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <Button variant="primary" className="h-50 px-3 ml-5" onClick={() => this.onRedirect("auth")}>
                            Login / Signup
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
