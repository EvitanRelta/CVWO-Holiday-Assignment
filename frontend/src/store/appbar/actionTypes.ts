import { Category, Tag } from '../../apiClient/types';

export const APPBAR_SET_HEADER = 'appbar/setHeader';
export const APPBAR_SET_CATEGORIES = 'appbar/setCategories';
export const APPBAR_SET_SELECTED_TAG = 'appbar/setSelectedTag';

export type AppbarSetHeader = {
    type: typeof APPBAR_SET_HEADER;
    payload: string[];
};
export type AppbarSetCategories = {
    type: typeof APPBAR_SET_CATEGORIES;
    payload: Category[];
};
export type AppbarSetSelectedTag = {
    type: typeof APPBAR_SET_SELECTED_TAG;
    payload: Tag | null;
};

export type AppbarDispatchTypes = AppbarSetHeader | AppbarSetCategories | AppbarSetSelectedTag;
