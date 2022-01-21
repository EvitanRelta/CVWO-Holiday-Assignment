import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import { UserDispatchTypes, USER_EMAIL_LOGIN_FAIL, USER_EMAIL_LOGIN_SUCCESS, USER_LOADING, USER_SIGNED_OUT } from '../actionTypes';

export default () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        await apiClient.signOut();
        dispatch({ type: USER_SIGNED_OUT });
    } catch (err) {
        dispatch({ type: USER_SIGNED_OUT });
    }
};