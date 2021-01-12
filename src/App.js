import React from "react";
import Header from "./container/Header/Header";
import Layout from "./components/Layout/Layout";
import Login from "./container/Auth/Login/Login";
import Signup from "./container/Auth/Signup/Signup";

import Footer from "./container/Footer/Footer";
import "./App.css";

import { useState } from "react";

function App() {
    const [activePage, setActivePage] = useState("login");

    const onRedirect = (page) => {
        setActivePage(page);
    };

    return (
        <div>
            <Header onRedirectToHome={onRedirect} />
            <Layout>
                <div className="background">
                    {activePage === "login" ? <Login onRedirect={onRedirect} /> : <Signup onRedirect={onRedirect} />}
                </div>
            </Layout>
            <Footer />
        </div>
    );
}

export default App;
