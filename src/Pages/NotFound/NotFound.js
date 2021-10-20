import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {

    // react history hook 
    const history = useHistory();

    // redirect to home on button click 
    const redirectHome = () => {
        history.push('/home');
    }
    return (
        <div className="container-fluid">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src="./images/404_error.jpg" alt="404_error" />
                <br /> <br />
                <button onClick={redirectHome} className="btn btn-dark my-5">Go back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;