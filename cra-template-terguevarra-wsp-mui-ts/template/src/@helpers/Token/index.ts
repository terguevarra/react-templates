import { JWTTOKEN } from '@configurations/SessionNames';

class Token{
    static SaveToken = (_token : string) => {
        localStorage.setItem(JWTTOKEN, _token);
    }

    static GetToken = () => {
        return localStorage.getItem(JWTTOKEN);
    }

    static RemoveToken = () => {
        localStorage.removeItem(JWTTOKEN);
    }

    static IsToken = (token : string) => {
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