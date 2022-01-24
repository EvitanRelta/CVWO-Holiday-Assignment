import { Category, Task } from '../../apiClient/types';
import { DataDispatchTypes, DATA_APPEND_CATEGORY, DATA_APPEND_TASK, DATA_EDIT_TASK, DATA_ERROR, DATA_LOADING, DATA_REMOVE_TASK, DATA_SET_ALL_TASKS, DATA_SET_CATEGORIES } from './actionTypes';
import Lodash from 'lodash';

type DataState = {
    hasInitData: boolean;
    isLoading: boolean;
    errorMessage?: string;
    tasks: Task[];
    categories: Category[];
};

const initialState: DataState = {
    hasInitData: false,
    isLoading: false,
    tasks: [],
    categories: []
};

const dataReducer = (state=initialState, action: DataDispatchTypes): DataState => {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case DATA_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };
        case DATA_SET_ALL_TASKS:
            return {
                ...state,
                hasInitData: true,
                isLoading: false,
                tasks: action.payload
            };
        case DATA_APPEND_TASK:
            return {
                ...state,
                isLoading: false,
                tasks: state.tasks.concat([action.payload])
            };
        case DATA_SET_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            };
        case DATA_EDIT_TASK:
            const tasksShallowCopy = Lodash.clone(state.tasks);
            const index = Lodash.findIndex(tasksShallowCopy, { id: action.payload.id });
            const updatedTask = {
                ...tasksShallowCopy[index],
                ...action.payload
            };
            tasksShallowCopy.splice(index, 1, updatedTask);
            return {
                ...state,
                isLoading: false,
                tasks: tasksShallowCopy
            };
        case DATA_REMOVE_TASK:
            return {
                ...state,
                isLoading: false,
                tasks: Lodash.filter(state.tasks, task => task.id !== action.payload)
            };
        case DATA_APPEND_CATEGORY:
            return {
                ...state,
                isLoading: false,
                categories: state.categories.concat([action.payload])
            };
        default:
            return state;
    }
};

export default dataReducer;