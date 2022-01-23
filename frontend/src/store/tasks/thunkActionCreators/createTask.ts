import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { TasksDispatchTypes, TASKS_APPEND, TASKS_ERROR } from '../actionTypes';

export default (title: string, description: string) => async (dispatch: Dispatch<TasksDispatchTypes>) => {
    try {
        const newTask = await apiClient.createTask(title, description);
        dispatch({
            type: TASKS_APPEND,
            payload: newTask
        });
    } catch (err) {
        if (err instanceof ApiError)
            dispatch({
                type: TASKS_ERROR,
                payload: err.message
            });
        else if (err instanceof Error)
            dispatch({
                type: TASKS_ERROR,
                payload: 'Internal server error.'
            });
    }
};