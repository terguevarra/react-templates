import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const Main = lazy(() => import('pages/protected/Main'));
const Login = lazy(() => import('pages/public/Login'));
const RouteNotFound = lazy(() => import('@components/RouteNotFound'));

function ParentRouter() {
    return(
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Redirect from={'/'} exact to={`/app`} />
                {/* 
                    for private routes, you can pass a function to checker props for authentications 
                    NOTE: checker has a default value of a function that returns true
                */}
                <PrivateRoute path={`/app`}>
                    <Main />
                </PrivateRoute>
                <Route path={`/login`} component={Login} />
                <Route component={RouteNotFound} />
            </Switch>
        </Suspense>
        
    );
}

export default withRouter(ParentRouter);