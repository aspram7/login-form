import { useState } from "react";

import Login from "./container/Login/Login";
import Signup from "./container/Signup/Signup";

// CLASS COMPONENTS
// import LoginClass from "./container/Login-class/Login";
// import SignupClass from "./container/Signup-class/Signup";

import "./App.css";

function App() {
    const [activePage, setActivePage] = useState("login");

    const onRedirect = (page) => {
        setActivePage(page);
    };

    return (
        <div className="background">{activePage === "login" ? <Login onRedirect={onRedirect} /> : <Signup onRedirect={onRedirect} />}</div>
    );
}

export default App;
