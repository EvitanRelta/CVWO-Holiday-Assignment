import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import { UserDispatchTypes, USER_LOGIN_SUCCESS, USER_SIGNED_OUT, USER_LOGGING_IN_FROM_COOKIES } from '../actionTypes';

export default () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        if (!apiClient.hasAuthTokens()) {
            dispatch({ type: USER_SIGNED_OUT });
            return;
        }
        dispatch({ type: USER_LOGGING_IN_FROM_COOKIES });
        const user = await apiClient.validateToken();
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user
        })
    } catch (err) {
        dispatch({ type: USER_SIGNED_OUT });
    }
};