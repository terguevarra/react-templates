import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js';

function ServerErrorInterceptor(){
  const interceptor = axios.interceptors.use(response => {
    return response;
  }, error => {
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
    }catch(e){

    }
    return Promise.reject(error);
  });
}

export default ServerErrorInterceptor;