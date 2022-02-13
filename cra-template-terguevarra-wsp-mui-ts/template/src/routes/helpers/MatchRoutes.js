import { matchPath, Router } from "react-router";

const MatchRoutes = (routes, pathname, branch = []) => {
  routes.some(route => {
    const match = route.path 
    ? matchPath(pathname, route) 
    : branch.length 
    ? branch[branch.length - 1].match 
    : Router.computeRootMatch(pathname);

    console.log(match);

    if(match){
      branch.push({ route, match });
      if(route.routes){
        MatchRoutes(route.routes, pathname, branch);
      }
    }
    return match;
  });
  return branch;
}

export default MatchRoutes;