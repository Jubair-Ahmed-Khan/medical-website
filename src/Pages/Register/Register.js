import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const imgSrc = './images/login/signin.png';
    // const history = useHistory();
    return (
        <div>
            <div className="container py-5">
                <div className="row">

                    {/* login header image  */}
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid" src={imgSrc} alt="welcome_image" />
                        </div>
                    </div>

                    {/* login form  */}
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">
                        <form className="bg-white p-5 shadow-lg">
                            <h1 className="mb-4">Register</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Re-enter Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-type your password" />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Register</button>
                            <p className="text-danger text-decoration-none text-center my-3">
                                <Link className="text-danger text-decoration-none" to="/login">Already a member? Please login</Link>
                            </p>
                            <p className="text-center my-3">---- or ----</p>
                            <button className=" btn btn-info w-100" onClick={signInUsingGoogle}>
                                Sign in using Google
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;