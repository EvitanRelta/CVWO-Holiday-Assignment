import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_ERROR, DATA_REMOVE_CATEGORY, DATA_SET_ALL_TASKS } from '../actionTypes';

export default (categoryId: number) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        await apiClient.deleteCategory(categoryId);
        const tasks = await apiClient.getTasks();
        dispatch({
            type: DATA_REMOVE_CATEGORY,
            payload: categoryId
        });
        dispatch({
            type: DATA_SET_ALL_TASKS,
            payload: tasks
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