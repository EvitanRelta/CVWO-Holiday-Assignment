import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { UserInfo } from '../../../apiClient/types';
import { UserDispatchTypes, USER_LOGIN_SUCCESS, USER_LOADING } from '../actionTypes';
import setEmailSignupError from '../basicActionCreators/setEmailSignupError';

export default (email: string, password: string, passwordConfirmation: string, userInfo?: UserInfo) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({ type: USER_LOADING });
        const user = await apiClient.emailSignUp(email, password, passwordConfirmation, userInfo);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user
        });
    } catch (err) {
        if (err instanceof ApiError)
            dispatch(setEmailSignupError(err.message));
        else if (err instanceof Error)
            dispatch(setEmailSignupError('Internal server error.'));
    }
};