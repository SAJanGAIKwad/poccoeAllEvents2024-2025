import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <div className="App">
            <div className='menu-container' ref={menuRef}>
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                    <ul>
                        <li className="dropdown-item">
                            <Link
                                exact
                                to="/user"
                                className="nav-links"
                            >
                                User Login
                            </Link>
                        </li>
                        <li className="dropdown-item">
                            <Link
                                exact
                                to="/admin"
                                className="nav-links"
                            >
                                Admin Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default UserMenu