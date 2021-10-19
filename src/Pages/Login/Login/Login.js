import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const imgSrc = './images/login/signin.png';
    //console.log(signInUsingGoogle, ' user : ', user.name);
    // const handleSignIn = (e) => {
    //     // console.log);
    //     e.preventDefault();
    //     console.log('habjia');
    // }
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
                        <div className="bg-white p-5 shadow-lg">
                            <h1 className="mb-4">Login</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <small><a className="text-decoration-none" href="https://www.facebook.com">Forgot password?</a></small>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Login</button>
                            <p className="text-danger text-decoration-none text-center my-3">
                                <Link className="text-danger text-decoration-none" to="/register">Not a member yet? Please register</Link>
                            </p>
                            <p className="text-center my-3">---- or ----</p>
                            <button onClick={signInUsingGoogle} className=" btn btn-info w-100">

                                Sign in using Google
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;