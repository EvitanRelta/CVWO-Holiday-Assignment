import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;