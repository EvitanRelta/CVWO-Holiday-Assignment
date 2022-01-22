import { Task } from '../../apiClient/types';

export const TASKS_LOADING = 'tasks/loading';
export const TASKS_SET_ALL = 'tasks/setAll';

export type TasksLoading = {
    type: typeof TASKS_LOADING;
};
export type TasksSetAll = {
    type: typeof TASKS_SET_ALL;
    payload: Task[];
};

export type TasksDispatchTypes = TasksLoading | TasksSetAll;
