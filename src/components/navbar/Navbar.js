import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div
            className={toggle ? "navbar-container" : "navbar-container toggle"}
        >
            <div
                className={toggle ? "hamburger" : "hamburger open"}
                onClick={() => setToggle(!toggle)}
            >
                <img src={toggle ? hamburger : close} alt="" />
            </div>

            <div className={toggle ? "logo" : "logo open"}>
                <img src={logo} alt="" />
            </div>

            <ul
                className={
                    toggle ? "navlinks-container" : "navlinks-container open"
                }
            >
                <li className="nav-links">home</li>
                <li className="nav-links">shop</li>
                <li className="nav-links">about</li>
                <li className="nav-links">contact</li>
            </ul>
        </div>
    );
};
