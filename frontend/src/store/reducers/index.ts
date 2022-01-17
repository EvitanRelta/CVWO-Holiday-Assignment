import { combineReducers } from 'redux';
import isDarkMode from './isDarkMode';


const combinedReducer = combineReducers({
    isDarkMode
});

export { isDarkMode };
export default combinedReducer;
export type RootState = ReturnType<typeof combinedReducer>;