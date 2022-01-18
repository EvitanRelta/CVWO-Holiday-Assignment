import { Action, Reducer } from 'redux';
import { SetDarkModeAction } from '../actionsCreators/setDarkMode';

// Defaults to Light-Mode if fail to get preference.
const systemPrefersDarkMode = (
    window.matchMedia 
        && window.matchMedia('(prefers-color-scheme: dark)').matches
) || false;

const isDarkMode: Reducer<boolean, SetDarkModeAction | Action<'isDarkMode/toggle'>> = (state = systemPrefersDarkMode, action) => {
    switch (action.type) {
        case 'isDarkMode/set':
            return action.payload;
        case 'isDarkMode/toggle':
            return !state;
        default:
            return state;
    }
};

export default isDarkMode;