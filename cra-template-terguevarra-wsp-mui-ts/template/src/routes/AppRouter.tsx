import { useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { Route, Switch, withRouter, Redirect, useLocation } from 'react-router-dom';

// import Token from '@helpers/Token';
// import IfArrayIsInList from '@helpers/Utility/IfArrayIsInList';

import Loader from '@components/Loader';
import useCurrentPageStore from '@store/useCurrentPageStore';
import { PREV_ROUTE } from '@configurations/SessionNames';

import { MatchRoutes } from 'routes/helpers';
import { IRoutes, IRedirects } from '@interfaces';

const Home = lazy(() => import('views/protected/Home'));
const Route1 = lazy(() => import('views/protected/Route1'));
const Route2 = lazy(() => import('views/protected/Route2'));
const RouteNotFound = lazy(() => import('@components/RouteNotFound'));

const routes : Array<IRoutes> = [
    { path: `/route1`, component: <Route1 />, roleAllowed: [], title: 'Route 1', breadcrumb: [{ title: 'Route 1' }] },
    { path: `/route2`, component: <Route2 />, roleAllowed: [], title: 'Route 2', breadcrumb: [{ title: 'Route 2' }] },
    { path: `/`, component: <Home />, roleAllowed: [], title: 'Home', breadcrumb: [{ title: 'Home' }] },
]

const redirects : Array<IRedirects> = [
    
]

const MainRouter = () => {
    const location = useLocation();
    const [routeList, setRouteList] = useState(routes);
    const [currentRoute, setCurrentRoute] = useState({
        to: location.pathname,
        from: location.pathname
    });
    const setPageTitle = useCurrentPageStore(state => state.setPageTitle);
    const setBreadCrumb = useCurrentPageStore(state => state.setBreadCrumb);

    const setCurrentRouteConfig = useCallback((_routes : Array<IRoutes>) => {
        console.log(_routes);
        let routes = MatchRoutes(_routes, location.pathname);
        setPageTitle(routes[0].route.title);
        setBreadCrumb(routes[0].route.breadcrumb);
    }, [location.pathname, setBreadCrumb, setPageTitle]);
    
    const setRoutes = useCallback(() => {
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
        setCurrentRouteConfig(routes);
        setRouteList(routes);
    }, [setCurrentRouteConfig]);

    useEffect(() => {
        setCurrentRoute((prevState) => ({ to: location.pathname, from: prevState.to }));
        setRoutes();
    }, [location, setRoutes]);

    useEffect(() => {
        sessionStorage.setItem(PREV_ROUTE, currentRoute.from);
    }, [currentRoute]);

    return(
        <Suspense fallback={<Loader />}>
            <Switch>
                {redirects.map(_redirect => {
                    return <Redirect exact from={_redirect.from} to={_redirect.to} key={`${_redirect.from}${_redirect.to}`} />
                })}
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