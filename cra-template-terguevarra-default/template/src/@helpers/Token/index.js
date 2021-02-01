import Lockr from 'lockr';

import { JWTTOKEN } from '@configurations/SessionNames';

class Token{
    static SaveToken = (_token) => {
        Lockr.set(JWTTOKEN, _token);
    }

    static GetToken = () => {
        return Lockr.get(JWTTOKEN);
    }

    static RemoveToken = () => {
        Lockr.rm(JWTTOKEN);
    }

    static IsToken = (token) => {
        if(token !== undefined && token !== null){
            return token.split('.').length === 3 ? true : false;
        }
        return false;
    }

    static HasValidToken = () => {
        let token = this.GetToken();
        if(token){
            return token.split('.').length === 3 ? true : false;
        }
        return false;
    }

    static Payload = () => {
        let token = this.GetToken();
        if(token)
        {
            if(this.HasValidToken())
            {
                try{
                    return JSON.parse(atob(token.split('.')[1]));
                }catch(e){
                    return null;
                }
            }
        }
        return null;
    }
}

export default Token;