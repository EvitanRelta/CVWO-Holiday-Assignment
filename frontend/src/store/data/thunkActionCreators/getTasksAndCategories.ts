import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_ERROR, DATA_LOADING, DATA_SET_ALL_TASKS, DATA_SET_CATEGORIES } from '../actionTypes';

export default () => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        dispatch({ type: DATA_LOADING });
        const [tasks, categories] = await Promise.all([
            apiClient.getTasks(),
            apiClient.getCategories()
        ]);
        dispatch({
            type: DATA_SET_ALL_TASKS,
            payload: tasks
        });
        dispatch({
            type: DATA_SET_CATEGORIES,
            payload: categories
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