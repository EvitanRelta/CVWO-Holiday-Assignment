import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';


const combinedReducer = combineReducers({
    isDarkMode: isDarkModeReducer
});

export default combinedReducer;
export type RootState = ReturnType<typeof combinedReducer>;