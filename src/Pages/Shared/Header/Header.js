import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    // destructuring from auth 
    const { user, logOut } = useAuth();

    return (
        <div>

            {/* navbar container */}
            <nav className="navbar navbar-expand-lg navbar-light nav-bg" >
                <div className="container-fluid">

                    {/* website logo  */}
                    <NavLink className="navbar-brand" to="/home">
                        <img src="./images/logo.png" alt="" className=" d-inline-block align-text-top logo" />
                    </NavLink>

                    {/* toggler button  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapsible navlinks */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mt-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                            </li>
                        </ul>

                        {/* conditional rendering  */}
                        {
                            user?.email ?
                                <span className="navbar-text mt-3">
                                    <span style={{ fontSize: "20px" }} className="text-danger me-3 my-3">{user.displayName}
                                    </span>
                                    <Button onClick={logOut} variant="dark me-3 my-3">Logout</Button>

                                </span>
                                :
                                <span>
                                    <button className="btn btn-dark me-3">
                                        <NavLink to="/login" className="text-decoration-none text-white">Login</NavLink>
                                    </button>
                                    <button className="btn btn-dark me-3">
                                        <NavLink to="/register" className="text-decoration-none text-white">Register</NavLink>
                                    </button>
                                </span>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;