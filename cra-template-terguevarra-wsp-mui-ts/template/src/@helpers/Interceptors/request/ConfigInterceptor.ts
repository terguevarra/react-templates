import axios from 'axios';

import useViewAsStore from '@store/useViewAsStore';
import useLoggedInAsStore from '@store/useLoggedInAsStore';

function ConfigInterceptor(){
  axios.interceptors.request.use(config => {
    const viewAsUsername = useViewAsStore.getState().viewAsUsername;
    const loggedInAsUsername = useLoggedInAsStore.getState().loggedInAsUsername;
    if(viewAsUsername){
      config.headers['ViewAsUsername'] = viewAsUsername;
      config.headers['LoggedInUsername'] = loggedInAsUsername;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
}

export default ConfigInterceptor;