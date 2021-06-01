import axios from 'axios';

const _private = {
    checkOptions(options) {
        let data = options == null ? { cache: false } : options;
        data.cache = false;
        data.withCredentials = false;
        return data;
    }
}

class Http {
    static Get = async (url, options = null) => {
        try{
            options = _private.checkOptions(options);
            let resp = await axios.get(url, options);
            return resp.data;
        }catch(error){
            Promise.reject(error);
        }
    }

    static Post = async (url, params, options = null) => {
        try{
            options = _private.checkOptions(options);
            let resp = await axios.post(url, params, options);
            return resp.data;
        }catch(error){
            Promise.reject(error);
        }
    }

    static Put = async (url, params, options = null) => {
        try{
            options = _private.checkOptions(options);
            let resp = await axios.put(url, params, options);
            return resp.data;
        }catch(error){
            Promise.reject(error);
        }
    }

    static Delete = async (url, options = null) => {
        try{
            options = _private.checkOptions(options);
            let resp = await axios.delete(url, options);
            return resp.data;
        }catch(error){
            Promise.reject(error);
        }
    }
}



export default Http;