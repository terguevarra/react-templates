import { useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '@helpers/Auth/Hooks';
import useLoggedInAsStore from '@store/useLoggedInAsStore';
import useViewAsStore from '@store/useViewAsStore';
import { useAccount } from '@helpers/Auth/Hooks';

const Auth = () => {
  const history = useHistory();
  const location = useLocation();
  const { isAuthenticated, validateCurrentSession } = useAuth();
  const { getAccount } = useAccount();
  const { loggedInAsUsername, loggedInAsDisplayName, setLoggedInBulk } = useLoggedInAsStore();
  const { viewAsUsername, setViewAsUsername, setViewAsDisplayName, viewAsDisplayName } = useViewAsStore();

  const setLoggedInAs = useCallback(async () => {
    if(!loggedInAsUsername){
      let response = await getAccount();
      if(response){
        setLoggedInBulk({
          loggedInAsUsername: response?.userPrincipalName, 
          loggedInAsDisplayName: response?.displayName
        })
      }
    }
  }, [getAccount, setLoggedInBulk, loggedInAsUsername]);

  useEffect(() => {
    validateCurrentSession();
  }, [validateCurrentSession]);

  useEffect(() => {
    setLoggedInAs();
  }, [setLoggedInAs]);

  useEffect(() => {
    if(isAuthenticated){
      if(!viewAsUsername || !viewAsDisplayName){
        setViewAsUsername(loggedInAsUsername);
        setViewAsDisplayName(loggedInAsDisplayName);
      }
    }
  }, [viewAsUsername, isAuthenticated, setViewAsUsername, loggedInAsUsername, loggedInAsDisplayName, setViewAsDisplayName, viewAsDisplayName])

  useEffect(() => {
    if(!isAuthenticated && location.pathname !== '/'){
        history.push('/');
    }
  }, [location, isAuthenticated, history]);

  return(<></>);
}

export default Auth;