import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    let fontFamily = "super_mario_256regular";
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link style={{textDecoration: 'none'}} to='/' className="navbar-logo">
                    <span className="nav-text">Home</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/beach'>
                    <span className="nav-text">Beaches</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/eateries'>
                    <span className="nav-text">Eateries</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/educational'>
                    <span className="nav-text">Educational</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/nature'>
                    <span className="nav-text">Nature</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/urban'>
                    <span className="nav-text">City Life</span>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar