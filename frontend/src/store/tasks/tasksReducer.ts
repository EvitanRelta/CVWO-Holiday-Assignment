import { Task } from '../../apiClient/types';
import { TasksDispatchTypes, TASKS_APPEND, TASKS_ERROR, TASKS_LOADING, TASKS_SET_ALL } from './actionTypes';

type TasksState = {
    isLoading: boolean;
    errorMessage?: string;
    tasks: Task[];
};

const initialState: TasksState = {
    isLoading: false,
    tasks: []
};

const tasksReducer = (state=initialState, action: TasksDispatchTypes): TasksState => {
    switch (action.type) {
        case TASKS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case TASKS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TASKS_SET_ALL:
            return {
                isLoading: false,
                tasks: action.payload
            };
        case TASKS_APPEND:
            return {
                isLoading: false,
                tasks: state.tasks.concat([action.payload])
            };
        default:
            return state;
    }
};

export default tasksReducer;