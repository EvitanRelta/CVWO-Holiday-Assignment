import { combineReducers } from 'redux';
import isDarkModeReducer from './isDarkMode/isDarkModeReducer';
import userReducer from './user/userReducer';
import tasksReducer from './tasks/tasksReducer';


const rootReducer = combineReducers({
    isDarkMode: isDarkModeReducer,
    user: userReducer,
    tasks: tasksReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;