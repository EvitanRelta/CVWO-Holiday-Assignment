import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const render = async (Component: React.ElementType) : Promise<void> => {
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

render(App);
