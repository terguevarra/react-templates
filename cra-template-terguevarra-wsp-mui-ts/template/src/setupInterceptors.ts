import { AuthInterceptor, VersionInterceptor, ConfigInterceptor } from '@helpers/Interceptors/request';
import { ServerErrorInterceptor, AuthErrorInterceptor } from '@helpers/Interceptors/response';

function setupInterceptors(){
  AuthInterceptor();
  VersionInterceptor();
  ConfigInterceptor();
  ServerErrorInterceptor();
  AuthErrorInterceptor();
}

export default setupInterceptors;