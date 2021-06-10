import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js';

import Token from '../Token';

//DEPRECATED
class ServerErrorInterceptor {
    setupInterceptor = () => {
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            try{
                if(error.response.status === 500){
                    Swal.fire({
                        title: 'Error',
                        text: 'Oop.. Something went wrong..',
                        icon: 'error',
                        allowOutsideClick: false,
                        willClose: function () {
                            
                        }
                    });
                }

                if(error.response.status === 401){
                    let tokenData = Token.GetToken();
                    if(tokenData){
                        Token.RemoveToken();
                    }
                    Swal.fire({
                        title: 'Unauthorized',
                        text: 'You are not authorized to access this page',
                        icon: 'error',
                        allowOutsideClick: false,
                        willClose: function () {
                            window.location.reload(true);
                        }
                    });
                }
            }catch(e){ 
                
            }
            return Promise.reject(error);
        });
    }
}

export default ServerErrorInterceptor;
