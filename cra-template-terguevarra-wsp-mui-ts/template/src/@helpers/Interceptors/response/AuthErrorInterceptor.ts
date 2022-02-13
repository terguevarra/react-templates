import axios from 'axios';
import Token from '@helpers/Token';
import { Msal } from '@helpers/Auth/Services';
import AuthStore from '@helpers/Auth/Store/AuthStore';

const msalService = new Msal();

function AuthErrorInterceptor(){
  const interceptor = axios.interceptors.response.use(response => {
    return response;
  }, error => {
    try{
      if(error.response.status === 401){
        axios.interceptors.response.eject(interceptor);
        return msalService.RefreshLogin().then(() => {
          error.response.config.headers['Authorization'] = `Bearer ${Token.GetToken()}`;
          return axios(error.response.config);
        }).catch(error => {
          console.log('INTERCEPTOR ERROR AUTH ',error);
          AuthStore.getState().setIsAuthenticated(false);
        }).finally(() => {
          AuthErrorInterceptor();
        });
      }
    }catch(e){
      console.error(e);
    }
    return Promise.reject(error);
  });
}

export default AuthErrorInterceptor;