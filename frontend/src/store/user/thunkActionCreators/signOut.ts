import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import { UserDispatchTypes, USER_CLEAR_DATA } from '../actionTypes';

export default () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        await apiClient.signOut();
        dispatch({ type: USER_CLEAR_DATA });
    } catch (err) {
        dispatch({ type: USER_CLEAR_DATA });
    }
};