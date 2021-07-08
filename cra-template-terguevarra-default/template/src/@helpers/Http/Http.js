import axios from 'axios';

class Http {

  static #checkOptions = (options) => {
    let data = options == null ? { cache: false } : options;
    data.cache = false;
    data.withCredentials = false;
    return data;
  }
  
  static Get = async (url, options = null) => {
    try{
      options = Http.#checkOptions(options);
      let resp = await axios.get(url, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Post = async (url, params, options = null) => {
    try{
      options = Http.#checkOptions(options);
      let resp = await axios.post(url, params, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Put = async (url, params, options = null) => {
    try{
      options = Http.#checkOptions(options);
      let resp = await axios.put(url, params, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }

  static Delete = async (url, options = null) => {
    try{
      options = Http.#checkOptions(options);
      let resp = await axios.delete(url, options);
      return resp.data;
    }catch(error){
      Promise.reject(error);
    }
  }
}



export default Http;