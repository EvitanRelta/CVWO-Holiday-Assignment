export const ISDARKMODE_SET = 'isDarkMode/set';

export type IsDarkModeSet = {
    type: typeof ISDARKMODE_SET;
    payload: boolean;
};

export type IsDarkModeDispatchTypes = IsDarkModeSet;
