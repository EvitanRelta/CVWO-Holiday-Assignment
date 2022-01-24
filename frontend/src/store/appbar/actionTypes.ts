import { Tag } from '../../apiClient/types';

export const APPBAR_SET_HEADER = 'appbar/setHeader';
export const APPBAR_SET_SELECTED_TAG = 'appbar/setSelectedTag';
export const APPBAR_SELECT_UNTAGGED = 'appbar/selectUntagged';
export const APPBAR_ALL_TASKS = 'appbar/allTasks';

export type AppbarSetHeader = {
    type: typeof APPBAR_SET_HEADER;
    payload: string[];
};
export type AppbarSetSelectedTag = {
    type: typeof APPBAR_SET_SELECTED_TAG;
    payload: Tag;
};
export type AppbarSelectUntagged = {
    type: typeof APPBAR_SELECT_UNTAGGED;
};
export type AppbarAllTasks = {
    type: typeof APPBAR_ALL_TASKS;
};

export type AppbarDispatchTypes = AppbarSetHeader | AppbarSetSelectedTag | AppbarSelectUntagged | AppbarAllTasks;
