import { ReactNode } from 'react';

import { Redirect, Route } from 'react-router-dom';

type Props = {
  children: ReactNode,
  checker?: () => boolean,
  redirectTo?: string
}

const PrivateRoute = ({
  children, 
  checker = () => { return true }, 
  redirectTo,
  ...rest
} : Props) => {
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