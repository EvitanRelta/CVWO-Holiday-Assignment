import Cookies from 'js-cookie';
import { Dispatch } from 'react';
import { RootState } from '../../rootReducer';
import { IsDarkModeDispatchTypes, ISDARKMODE_SET } from '../actionTypes';

export default () => async (dispatch: Dispatch<IsDarkModeDispatchTypes>, getState: () => RootState) => {
    const { isDarkMode } = getState();
    Cookies.set('dark-mode', (!isDarkMode).toString());
    dispatch({
        type: ISDARKMODE_SET,
        payload: !isDarkMode
    });
};