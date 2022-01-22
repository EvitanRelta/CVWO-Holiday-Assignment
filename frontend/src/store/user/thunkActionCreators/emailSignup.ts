import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import { UserDispatchTypes, USER_LOGIN_SUCCESS, USER_LOADING } from '../actionTypes';
import setEmailSignupError from '../basicActionCreators/setEmailSignupError';

export default (email: string, password: string, passwordConfirmation: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({ type: USER_LOADING });
        const user = await apiClient.emailSignUp(email, password, passwordConfirmation);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user
        });
    } catch (err) {
        if (err instanceof Error)
            dispatch(setEmailSignupError(err.message));
    }
};