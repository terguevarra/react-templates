import axios, { AxiosRequestConfig } from 'axios';

import { MS_GRAPH_API_URL } from '@configurations/Settings';

import { APPVERSION } from '@configurations/Settings';

function VersionInterceptor(){
  axios.interceptors.request.use((config : AxiosRequestConfig) => {
    if(!config.url!.includes('appVersion') && !config.url!.includes(MS_GRAPH_API_URL!)){
      if(config.url!.includes('?')){
        config.url = `${config.url}&appVersion=${APPVERSION}`;
      }else{
        config.url = `${config.url}?appVersion=${APPVERSION}`;
      }
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
}

export default VersionInterceptor;