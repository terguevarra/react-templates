import * as Msal from 'msal';

import { MSAL_CLIENT_ID, MSAL_SCOPE } from '@configurations/Settings';
import { JWTTOKEN, LOGIN_HINT } from '@configurations/SessionNames';

const msalConfig : Msal.Configuration = {
  auth: {
    clientId: MSAL_CLIENT_ID!
  }
};

const msalInstance = new Msal.UserAgentApplication(msalConfig);

msalInstance.handleRedirectCallback(() => {
  window.location.reload();
});

class Base {
  Scopes = MSAL_SCOPE!.split(';');

  MsalInstance = () => {
    return msalInstance;
  }

  SetToken = (_accessToken : string) => {
    localStorage.setItem(JWTTOKEN, _accessToken);
  }

  SetLoginHint = (_username : string) => {
    localStorage.setItem(LOGIN_HINT, _username);
  }

  GetToken = () => {
    return localStorage.getItem(JWTTOKEN);
  }

  GetLoginHint = () => {
    return localStorage.getItem(LOGIN_HINT);
  }

  RemoveToken = () => {
    localStorage.removeItem(JWTTOKEN);
  }

  RemoveLoginHint = () => {
    localStorage.removeItem(LOGIN_HINT);
  }
}

export default Base;