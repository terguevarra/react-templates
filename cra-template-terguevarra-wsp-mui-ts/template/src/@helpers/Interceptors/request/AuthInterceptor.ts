import axios from 'axios';
import Token from '../../Token';

function AuthInterceptor(){
  axios.interceptors.request.use(config => {
    let tokenData = Token.GetToken();
    if(tokenData){
      config.headers['Authorization'] = `Bearer ${tokenData}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
}

export default AuthInterceptor;