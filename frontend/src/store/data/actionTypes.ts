import { Category, Task } from '../../apiClient/types';

export const DATA_LOADING = 'data/loading';
export const DATA_ERROR = 'data/error';
export const DATA_SET_ALL_TASKS = 'data/setAllTasks';
export const DATA_APPEND_TASK = 'data/appendTask';
export const DATA_SET_CATEGORIES = 'data/setCategories';

export type DataLoading = {
    type: typeof DATA_LOADING;
};
export type DataError = {
    type: typeof DATA_ERROR;
    payload: string;
};
export type DataSetAllTasks = {
    type: typeof DATA_SET_ALL_TASKS;
    payload: Task[];
};
export type DataAppendTask = {
    type: typeof DATA_APPEND_TASK;
    payload: Task;
};
export type DataSetCategories = {
    type: typeof DATA_SET_CATEGORIES;
    payload: Category[];
};

export type DataDispatchTypes = DataLoading | DataError | DataSetAllTasks | DataAppendTask | DataSetCategories;
