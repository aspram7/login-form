import React, { useState } from "react";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

import "./Auth.scss";

const Auth = (props) => {
    const [activePage, setActivePage] = useState("login");

    const onRedirect = (page) => {
        setActivePage(page);
    };

    return <div className="auth">{activePage === "login" ? <Login onRedirect={onRedirect} /> : <Signup onRedirect={onRedirect} />}</div>;
};

export default Auth;
