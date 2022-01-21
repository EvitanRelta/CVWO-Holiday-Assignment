import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';

const store = createStore(
    rootReducer,
    // @ts-ignore
    // https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = async (Component: React.ElementType) : Promise<void> => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);
