import Cookies from 'js-cookie';
import { IsDarkModeDispatchTypes, ISDARKMODE_SET } from './actionTypes';

// Defaults to Light-Mode if fail to get preference.
const cookiesIsDarkMode = Cookies.get('dark-mode');
const isDarkMode = cookiesIsDarkMode
    ? cookiesIsDarkMode === 'true'
    : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const isDarkModeReducer = (state=isDarkMode, action: IsDarkModeDispatchTypes): boolean => {
    switch (action.type) {
        case ISDARKMODE_SET:
            return action.payload;
        default:
            return state;
    }
};

export default isDarkModeReducer;