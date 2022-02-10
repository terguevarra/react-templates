import React from 'react';

import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({
  children, 
  checker = () => { return true }, 
  redirectTo,
  ...rest
}){
  return (
    <Route  {...rest} 
            render={({location}) => checker() ? (children) : (
              <Redirect to={{
                pathname: redirectTo,
                state: { from: location }
              }} />
            )} />
  );
}

export default PrivateRoute;