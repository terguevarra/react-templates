import axios from 'axios';
import Swal, { SweetAlertOptions } from 'sweetalert2';

function ServerErrorInterceptor(){
  axios.interceptors.response.use(response => {
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
        } as SweetAlertOptions);
      }
    }catch(e){

    }
    return Promise.reject(error);
  });
}

export default ServerErrorInterceptor;