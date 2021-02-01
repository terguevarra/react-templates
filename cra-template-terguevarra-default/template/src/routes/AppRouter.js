import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect, useLocation } from 'react-router-dom';

// import Token from '@helpers/Token';
// import IfArrayIsInList from '@helpers/Utility/IfArrayIsInList';

const Home = lazy(() => import('pages/protected/Home'));
const RouteNotFound = lazy(() => import('@components/RouteNotFound'));

const routes = [
    { path: `/app/home`, component: <Home />, roleAllowed: [] }
]

function MainRouter(){
    const location = useLocation();
    const [routeList, setRouteList] = useState(routes);

    useEffect(() => {
        setRoutes();
    }, [location]);

    function setRoutes(){
        /*

        **Code below is just sample for filtering Routes based on Roles
        **Token is imported from Token helper

        let accessList = Token.Payload().AccessList.split(',');
        let tmpRoutes = [];
        routes.forEach(i => {
            if(i.roleAllowed.length > 0){
                if(IfArrayIsInList(i.roleAllowed, accessList)){
                    tmpRoutes.push(i);
                }
            }else{
                tmpRoutes.push(i);
            }
        });
        setRouteList(tmpRoutes);
        */
        
        setRouteList(routes);
    }

    return(
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Redirect exact from={'/app'} to={`/app/home`} />
                {routeList.map(_route => {
                    return <Route exact path={_route.path} key={_route.path}>
                                {_route.component}
                            </Route>
                })}
                <Route component={RouteNotFound} />
            </Switch>
        </Suspense>
        
    );
    
}

export default withRouter(MainRouter);