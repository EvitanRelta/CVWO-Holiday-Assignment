import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { TasksDispatchTypes, TASKS_LOADING, TASKS_SET_ALL } from '../actionTypes';

export default () => async (dispatch: Dispatch<TasksDispatchTypes>) => {
    try {
        dispatch({ type: TASKS_LOADING });
        const tasks = await apiClient.getTasks();
        dispatch({
            type: TASKS_SET_ALL,
            payload: tasks
        });
    } catch (err) {
        // If error, then cry.

        // if (err instanceof ApiError)
        //     dispatch(setEmailLoginError(err.message));
        // else if (err instanceof Error)
        //     dispatch(setEmailLoginError('Internal server error.'));
    }
};