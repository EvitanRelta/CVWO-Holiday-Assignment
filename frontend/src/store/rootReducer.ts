import { combineReducers } from 'redux';
import appbarReducer from './appbar/appbarReducer';
import dataReducer from './data/dataReducer';
import dialogsReducer from './dialogs/dialogsReducer';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer,
    user: userReducer,
    data: dataReducer,
    appbar: appbarReducer,
    dialogs: dialogsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;