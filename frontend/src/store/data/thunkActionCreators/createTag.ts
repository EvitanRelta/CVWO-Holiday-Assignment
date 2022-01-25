import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_APPEND_TAG, DATA_ERROR } from '../actionTypes';

export default (categoryId: number, name: string) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        const tag = await apiClient.createTag(categoryId, name);
        dispatch({
            type: DATA_APPEND_TAG,
            payload: { categoryId, tag }
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