import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Blog from "pages/BlogIndex";


export default function App() {
    // If you want to disable the animation just use the disabled `prop` like below on your page's component
    // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/news">
                        <Blog />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
