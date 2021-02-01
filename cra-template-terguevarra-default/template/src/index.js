import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

//Setup interceptors here
//You can use default interceptors provided in the @helpers/Interceptors folder

// import ServerErrorInterceptor from '@helpers/Interceptors/ServerError';
// import AuthenticationInterceptor from '@helpers/Interceptors/AuthenticationInterceptor';

// const serverError = new ServerErrorInterceptor();
// const authenticationInterceptor = new AuthenticationInterceptor();

// serverError.setupInterceptor();
// authenticationInterceptor.setupInterceptor();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

//NOTE: go to https://www.simicart.com/manifest-generator.html/ for manifest generation

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
