import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { DataDispatchTypes, DATA_ERROR, DATA_LOADING, DATA_SET_ALL_TASKS } from '../actionTypes';
import getCategoriesFromTasks from './helperFunctions/getCategoriesFromTasks';
import setAppbarCategories from '../../appbar/basicActionCreators/setAppbarCategories';
import { AppbarSetCategories } from '../../appbar/actionTypes';

export default () => async (dispatch: Dispatch<DataDispatchTypes | AppbarSetCategories>) => {
    try {
        dispatch({ type: DATA_LOADING });
        const tasks = await apiClient.getTasks();
        const categories = getCategoriesFromTasks(tasks);
        dispatch({
            type: DATA_SET_ALL_TASKS,
            payload: tasks
        });
        dispatch(setAppbarCategories(categories));
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