import { Action, Reducer } from 'redux';
import { SetDarkModeAction } from '../actionsCreators/setDarkMode';

const isDarkMode: Reducer<boolean, SetDarkModeAction | Action<'isDarkMode/toggle'>> = (state = false, action) => {
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