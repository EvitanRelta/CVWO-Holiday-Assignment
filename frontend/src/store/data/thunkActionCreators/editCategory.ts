import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_EDIT_CATEGORY, DATA_ERROR, DATA_SET_ALL_TASKS } from '../actionTypes';

export default (categoryId: number, name: string) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        const updatedCategory = await apiClient.editCategory(categoryId, name);
        const tasks = await apiClient.getTasks();
        dispatch({
            type: DATA_EDIT_CATEGORY,
            payload: updatedCategory
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