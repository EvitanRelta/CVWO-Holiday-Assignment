import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import { UserDispatchTypes, USER_EMAIL_LOGIN_FAIL, USER_EMAIL_LOGIN_SUCCESS, USER_LOADING } from '../actionTypes';

export default (email: string, password: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({ type: USER_LOADING });
        const user = await apiClient.emailSignIn(email, password);
        dispatch({
            type: USER_EMAIL_LOGIN_SUCCESS,
            payload: user
        });
    } catch (err) {
        if (err instanceof Error)
            dispatch({
                type: USER_EMAIL_LOGIN_FAIL,
                payload: err.message
            })
    }
};