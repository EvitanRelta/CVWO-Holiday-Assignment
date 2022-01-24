import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_APPEND_CATEGORY, DATA_ERROR } from '../actionTypes';

export default (name: string) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        const newCategory = await apiClient.createCategory(name);
        dispatch({
            type: DATA_APPEND_CATEGORY,
            payload: {
                ...newCategory,
                tags: []
            }
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