import axios from 'axios';
import Token from '../Token';

//DEPRECATED
class AuthenticationInterceptor{
    setupInterceptor = () => {
        axios.interceptors.request.use(function (config) {
            let tokenData = Token.GetToken();
            if(tokenData){
                config.headers['Authorization'] = 'Bearer ' + tokenData;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }
}

export default AuthenticationInterceptor;