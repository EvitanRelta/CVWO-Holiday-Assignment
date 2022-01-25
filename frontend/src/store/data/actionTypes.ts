import { Category, CategoryWOTags, Tag, Task, TaskWOCategories } from '../../apiClient/types';

export const DATA_LOADING = 'data/loading';
export const DATA_ERROR = 'data/error';
export const DATA_SET_ALL_TASKS = 'data/setAllTasks';
export const DATA_APPEND_TASK = 'data/appendTask';
export const DATA_SET_CATEGORIES = 'data/setCategories';
export const DATA_EDIT_TASK = 'data/editTask';
export const DATA_REMOVE_TASK = 'data/deleteTask';
export const DATA_APPEND_CATEGORY = 'data/appendCategory';
export const DATA_APPEND_TAG = 'data/appendTag';
export const DATA_EDIT_CATEGORY = 'data/editCategory';

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
export type DataEditTask = {
    type: typeof DATA_EDIT_TASK;
    payload: TaskWOCategories;
};
export type DataRemoveTask = {
    type: typeof DATA_REMOVE_TASK;
    payload: number;
};
export type DataAppendCategory = {
    type: typeof DATA_APPEND_CATEGORY;
    payload: Category;
};
export type DataAppendTag = {
    type: typeof DATA_APPEND_TAG;
    payload: {
        categoryId: number;
        tag: Tag;
    };
};
export type DataEditCategory = {
    type: typeof DATA_EDIT_CATEGORY;
    payload: CategoryWOTags;
};

export type DataDispatchTypes = DataLoading | DataError | DataSetAllTasks
    | DataAppendTask | DataSetCategories | DataEditTask | DataRemoveTask
    | DataAppendCategory | DataAppendTag | DataEditCategory;
