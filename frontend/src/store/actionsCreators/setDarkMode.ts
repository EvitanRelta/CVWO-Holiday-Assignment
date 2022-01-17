import { Action, ActionCreator } from 'redux';


interface SetDarkModeAction extends Action {
    type: 'isDarkMode/set';
    payload: boolean;
}

const setDarkMode: ActionCreator<SetDarkModeAction> = (isDarkMode: boolean) => ({
    type: 'isDarkMode/set',
    payload: isDarkMode
});


export default setDarkMode;
export type { SetDarkModeAction };