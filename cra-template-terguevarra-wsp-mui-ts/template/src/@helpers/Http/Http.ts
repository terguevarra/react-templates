import axios, { AxiosRequestConfig } from 'axios';

class Http {
  private static checkOptions = (options? : AxiosRequestConfig) => {
    let data = !options ? {  } : options;
    data.withCredentials = false;
    return data;
  }
  
  static Get = async (url : string, params : any = null, options? : AxiosRequestConfig) => {
    try{
      options = Http.checkOptions(options);
      let resp = await axios.get(`${url}${params !== null ? `?${new URLSearchParams(params).toString()}` : ''}`, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Post = async (url : string, params : any = null, options? : AxiosRequestConfig) => {
    try{
      options = Http.checkOptions(options);
      let resp = await axios.post(url, params, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Put = async (url : string, params : any = null, options? : AxiosRequestConfig) => {
    try{
      options = Http.checkOptions(options);
      let resp = await axios.put(url, params, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Delete = async (url : string, params : any = null, options? : AxiosRequestConfig) => {
    try{
      options = Http.checkOptions(options);
      let resp = await axios.delete(url, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }
}



export default Http;