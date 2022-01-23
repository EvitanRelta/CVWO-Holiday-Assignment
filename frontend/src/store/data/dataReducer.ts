import { Task } from '../../apiClient/types';
import { DataDispatchTypes, DATA_APPEND_TASK, DATA_ERROR, DATA_LOADING, DATA_SET_ALL_TASKS } from './actionTypes';

type DataState = {
    isLoading: boolean;
    errorMessage?: string;
    tasks: Task[];
};

const initialState: DataState = {
    isLoading: false,
    tasks: []
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
                isLoading: false,
                tasks: action.payload
            };
        case DATA_APPEND_TASK:
            return {
                isLoading: false,
                tasks: state.tasks.concat([action.payload])
            };
        default:
            return state;
    }
};

export default dataReducer;