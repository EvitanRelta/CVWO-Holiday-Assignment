import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_APPEND_TASK, DATA_ERROR } from '../actionTypes';

export default (title: string, description: string) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        const newTask = await apiClient.createTask(title, description);
        dispatch({
            type: DATA_APPEND_TASK,
            payload: newTask
        });
    } catch (err) {
        if (err instanceof ApiError)
            dispatch({
                type: DATA_ERROR,
                payload: err.message
            });
        else if (err instanceof Error)
            dispatch({
                type: DATA_ERROR,
                payload: 'Internal server error.'
            });
    }
};