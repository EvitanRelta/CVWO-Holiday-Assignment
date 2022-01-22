import { Task } from '../../apiClient/types';
import { TasksDispatchTypes, TASKS_SET_ALL } from './actionTypes';

type TasksState = {
    isLoading: boolean;
    tasks: Task[];
};

const initialState: TasksState = {
    isLoading: false,
    tasks: []
};

const tasksReducer = (state=initialState, action: TasksDispatchTypes): TasksState => {
    switch (action.type) {
        case TASKS_SET_ALL:
            return {
                isLoading: false,
                tasks: action.payload
            };
        default:
            return state;
    }
};

export default tasksReducer;