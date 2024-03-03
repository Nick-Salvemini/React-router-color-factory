import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav className="nav">
            <h1>Welcome to the Color Factory</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/colors/new">Add A Color</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;