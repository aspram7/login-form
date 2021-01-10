import React, { Component } from "react";

import "./Header.scss";

import logo from "../../assets/logo/logo.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container header-container">
                    <div className="logo" onClick={() => this.props.onRedirectToHome("login")}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Companies</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
