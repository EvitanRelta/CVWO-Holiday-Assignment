import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_APPEND_TASK, DATA_ERROR, DATA_REMOVE_TASK } from '../actionTypes';

export default (taskId: number) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        await apiClient.deleteTask(taskId);
        dispatch({
            type: DATA_REMOVE_TASK,
            payload: taskId
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