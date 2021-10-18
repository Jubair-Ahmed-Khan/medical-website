import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">
                        <img src="./images/logo.png" alt="" className=" d-inline-block align-text-top logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mt-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text mt-3">
                            <img src="" className="mx-3" alt="user_photo" />
                            <span>{user.displayName}</span>
                        </span>
                        {
                            user?.email ?
                                <Button onClick={logOut} variant="light me-5">Logout</Button>
                                :
                                <NavLink to="/login">Login</NavLink>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;