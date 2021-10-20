import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading, setIsLoading } = useAuth();

    console.log(isLoading);
    if (isLoading === true) {
        return <Spinner animation="danger" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;