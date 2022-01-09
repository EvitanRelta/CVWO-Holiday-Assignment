import ApiClient from 'devise-token-auth-client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const render = async Component => {
    const client = new ApiClient ({
        baseURL: 'http://localhost:3000/api'
    });
    await client.isInitialized;
    ReactDOM.render(
        <BrowserRouter>
            <Component client={client}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

render(App);
