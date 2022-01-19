import { Action, ActionCreator } from 'redux';


const toggleDarkMode: ActionCreator<Action<'isDarkMode/toggle'>> = () => ({
    type: 'isDarkMode/toggle'
});

export default toggleDarkMode;