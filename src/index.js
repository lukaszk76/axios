import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(request => {
    console.log(request);
    //here http request can be edited before sending
    return request;
}, 
error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //here a http response can be handled (for example a central error handling)
    console.log(response);
    return response;
}, 
error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
