import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';
import userReducer from './user/userReducer';
import appbarReducer from './appbar/appbarReducer';
import tasksReducer from './tasks/tasksReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer,
    user: userReducer,
    tasks: tasksReducer,
    appbar: appbarReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;