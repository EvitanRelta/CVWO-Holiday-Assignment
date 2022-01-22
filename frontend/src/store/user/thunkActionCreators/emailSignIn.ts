import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { UserDispatchTypes, USER_LOGIN_SUCCESS, USER_LOADING } from '../actionTypes';
import setEmailLoginError from '../basicActionCreators/setEmailLoginError';

export default (email: string, password: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({ type: USER_LOADING });
        const user = await apiClient.emailSignIn(email, password);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user
        });
    } catch (err) {
        if (err instanceof ApiError)
            dispatch(setEmailLoginError(err.message));
        else if (err instanceof Error)
            dispatch(setEmailLoginError('Internal server error.'));
    }
};