import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';
import userReducer from './user/userReducer';
import appbarReducer from './appbar/appbarReducer';
import dataReducer from './data/dataReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer,
    user: userReducer,
    data: dataReducer,
    appbar: appbarReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;