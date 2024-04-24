import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
        <div className="navbar">
            <div className="left-nav">
                <Link to="/series">
                <h3>TV Shows</h3>
                </Link>
                <Link to="/movies">                
                <h3>Movies</h3>
                </Link>
                <Link to ="/deadEnd">
                <h3>Search</h3>
                </Link>
            </div>
            <h1>New<span>FliX</span></h1>
            <div className="right-nav">
                <Link to="/mylist">
                <h3>My List</h3>
                </Link>
                <Link to="/logIn">
                    <h3>Login</h3>
                </Link>
                <Link to="/register">
                <h3>Register</h3>
                </Link>
            </div>
        </div>
        </>
    )
}

export default NavBar