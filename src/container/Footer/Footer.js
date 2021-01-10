import React, { Component } from "react";

import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/icons/social-media/facebook.png";
import instagram from "../../assets/icons/social-media/instagram.png";
import youtube from "../../assets/icons/social-media/youtube.png";

import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-body">
                        <div className="footer-menu">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Companies</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div className="socoal-media">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </div>
                    </div>
                    <p className="footer-footer">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eius veritatis dolorem architecto perferendis,
                        ratione temporibus, dignissimos labore amet repudiandae cumque minima facilis asperiores dolor atque neque ipsa id
                        itaque.
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
