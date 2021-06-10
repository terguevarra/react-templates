import { AuthInterceptor } from '@helpers/Interceptors/request';
import { ServerErrorInterceptor } from '@helpers/Interceptors/response';

function setupInterceptors(){
  AuthInterceptor();
  ServerErrorInterceptor();
}

export default setupInterceptors;