import { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Loader from '@components/Loader';
import { useAuth } from '@helpers/Auth/Hooks';

const Login = lazy(() => import('views/public/Login'));
const Main = lazy(() => import('views/protected/Main'));
const RouteNotFound = lazy(() => import('@components/RouteNotFound'));

const ParentRouter = () => {
    const { isAuthenticated, isLoginInProgress } = useAuth();

    useEffect(() => {
        console.log('Is Authenticated: ', isAuthenticated);
        console.log('Is Login In Progress: ', isLoginInProgress);
    }, [isAuthenticated, isLoginInProgress])

    return(
        <>
            {(isAuthenticated && !isLoginInProgress) && (
                <Suspense fallback={<Loader />}>
                    <Switch>
                        {/* 
                            for private routes, you can pass a function to checker props for authentications 
                            NOTE: checker has a default value of a function that returns true
                        */}
                        {/* <Route path={`/login`} component={Login} />
                        <PrivateRoute path={`/`} redirectTo={`/login`}>
                            <Main />
                        </PrivateRoute> */}
                        <Main />
                        <Route component={RouteNotFound} />
                    </Switch>
                </Suspense>
            )}

            {!isAuthenticated && (
                <Suspense fallback={<Loader />}>
                    <Login />
                </Suspense>
            )}

            {isLoginInProgress && <Loader />}
        </>
    );
}

export default withRouter(ParentRouter);