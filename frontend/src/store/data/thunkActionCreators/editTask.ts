import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_EDIT_TASK, DATA_ERROR } from '../actionTypes';

export default (taskId: number, taskOptions: { title?: string, description?:string }) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        const updatedTask = await apiClient.editTask(taskId, taskOptions);
        dispatch({
            type: DATA_EDIT_TASK,
            payload: updatedTask
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