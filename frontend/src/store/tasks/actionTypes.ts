import { Task } from '../../apiClient/types';

export const TASKS_LOADING = 'tasks/loading';
export const TASKS_ERROR = 'tasks/error';
export const TASKS_SET_ALL = 'tasks/setAll';
export const TASKS_APPEND = 'tasks/append';

export type TasksLoading = {
    type: typeof TASKS_LOADING;
};
export type TasksError = {
    type: typeof TASKS_ERROR;
    payload: string;
};
export type TasksSetAll = {
    type: typeof TASKS_SET_ALL;
    payload: Task[];
};
export type TasksAppend = {
    type: typeof TASKS_APPEND;
    payload: Task;
};

export type TasksDispatchTypes = TasksLoading | TasksError | TasksSetAll | TasksAppend;
