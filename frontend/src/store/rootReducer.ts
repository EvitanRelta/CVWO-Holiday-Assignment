import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer,
    user: userReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;