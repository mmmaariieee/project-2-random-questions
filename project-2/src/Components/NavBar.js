import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/FavoriteQuestions">Favorite Questions</NavLink>
            <NavLink to="/AddQuestions">Add Your Own Questions</NavLink>
        </nav>
    )
}

export default NavBar;