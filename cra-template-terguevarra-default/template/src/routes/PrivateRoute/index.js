import React from 'react';

import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({children, checker = () => { return true }, ...rest}){
    return (
        <Route  {...rest} 
                render={({location}) => checker() ? (children) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
                )} />
    );
}

export default PrivateRoute;