import { Dispatch } from 'react';
import apiClient from '../../../apiClient';
import ApiError from '../../../apiClient/ApiError';
import { TasksDispatchTypes, TASKS_ERROR, TASKS_LOADING, TASKS_SET_ALL } from '../actionTypes';
import getCategoriesFromTasks from './helperFunctions/getCategoriesFromTasks';
import setAppbarCategories from '../../appbar/basicActionCreators/setAppbarCategories';
import { AppbarSetCategories } from '../../appbar/actionTypes';

export default () => async (dispatch: Dispatch<TasksDispatchTypes | AppbarSetCategories>) => {
    try {
        dispatch({ type: TASKS_LOADING });
        const tasks = await apiClient.getTasks();
        const categories = getCategoriesFromTasks(tasks);
        dispatch({
            type: TASKS_SET_ALL,
            payload: tasks
        });
        dispatch(setAppbarCategories(categories));
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