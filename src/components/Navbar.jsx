import React, { useState } from 'react'
import '../components_css/Navbar.css';
import { NavLink } from 'react-router-dom';
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../components/Icons";
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span className="icon">
                            <CodeIcon />
                        </span>
                        <span>Evento</span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/event"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Event
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/admin-user-login"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar