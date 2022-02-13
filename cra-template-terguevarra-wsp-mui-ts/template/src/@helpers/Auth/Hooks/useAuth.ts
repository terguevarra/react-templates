import { Msal } from '../Services';
import AuthStore from '../Store/AuthStore';

function useAuth(){
  const isLoginInProgress = AuthStore(state => state.isLoginInProgress);
  const isAuthenticated = AuthStore(state => state.isAuthenticated);

  const login = () => {
    const msal = new Msal();
    msal.Login();
  }

  const logout = () => {
    const msal = new Msal();
    msal.Logout();
  }

  const validateCurrentSession = () => {
    const msal = new Msal();
    msal.SetIsAuthenticated();
  }

  return {
    login,
    logout,
    isLoginInProgress,
    isAuthenticated,
    validateCurrentSession
  }
}

export default useAuth;