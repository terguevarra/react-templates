import { Account } from 'msal';
import Base from './Base';

import AuthStore from '../../Store/AuthStore';

class Msal extends Base{
  private account : Account;

  constructor(){
    super();
    this.account = this.MsalInstance().getAccount();
  }

  private LoginPopup = async () => {
    try{
      let response = await this.MsalInstance().loginPopup({ scopes: this.Scopes });
      return response
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private LoginRedirect = () => {
    try{
      this.MsalInstance().loginRedirect({ scopes: this.Scopes });
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private SilentLogin = async (_email? : string | undefined) => {
    try{
      let response = await this.MsalInstance().ssoSilent({ scopes: this.Scopes, loginHint: _email });
      return response;
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private AcquireTokenPopup = async () => {
    try{
      let response = await this.MsalInstance().acquireTokenPopup({ scopes: this.Scopes });
      this.SetAccount();
      this.SetToken(response.accessToken);
      this.SetLoginHint(this.account.userName);
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private AcquireTokenRedirect = async () => {
    try{
      await this.MsalInstance().acquireTokenRedirect({ scopes: this.Scopes });
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private AcquireTokenSilent = async () => {
    try{
      let response = await this.MsalInstance().acquireTokenSilent({ scopes: this.Scopes });
      this.SetAccount();
      this.SetToken(response.accessToken);
      this.SetLoginHint(this.account.userName);
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }

  private SetAccount = () => {
    this.account = this.MsalInstance().getAccount();
  }

  SetIsAuthenticated = () => {
    const authStoreSub = AuthStore.subscribe(() => {});
    try{
      if(this.account){
        AuthStore.setState({ isAuthenticated: true });
      }else{
        if(this.GetLoginHint()){
          AuthStore.setState({ isAuthenticated: true });
        }else{
          AuthStore.setState({ isAuthenticated: false });
        }
      }
    }catch(ex){
      AuthStore.setState({ isAuthenticated: false });
    }finally{
      authStoreSub();
      AuthStore.destroy();
    }
  }

  GetAccount = () => {
    return this.account;
  }

  Logout = () => {
    this.MsalInstance().logout();
    localStorage.clear();
    sessionStorage.clear();
    this.SetIsAuthenticated();
  }

  Login = () => {
    console.log('initiate login: ', this.account);
    try{
      if(!AuthStore.getState().isLoginInProgress){
        this.LoginRedirect();
      }
    }catch(ex){
      AuthStore.setState({ isLoginInProgress: false, isAuthenticated: false });
      console.error(ex);
    }finally{
      this.SetIsAuthenticated();
    }
  }

  RefreshLogin = async () => {
    const authStoreSub = AuthStore.subscribe(() => {});
    console.log('initiate login refresh: ', this.account);
    try{
      if(this.account){
        await this.AcquireTokenSilent();
      }else{
        if(this.GetLoginHint()){
          await this.SilentLogin(this.GetLoginHint()!);
          await this.AcquireTokenSilent();
        }else{
          AuthStore.setState({ isLoginInProgress: false, isAuthenticated: false });
        }
      }
    }catch(ex){
      console.error(ex);
      AuthStore.setState({ isLoginInProgress: false, isAuthenticated: false });
    }finally{
      authStoreSub();
      AuthStore.destroy();
      this.SetIsAuthenticated();
    }
  }
}

export default Msal;