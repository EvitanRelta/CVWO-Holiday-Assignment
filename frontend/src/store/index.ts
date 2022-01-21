import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


//@ts-ignore
// https://github.com/zalmoxisus/redux-devtools-extension
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;