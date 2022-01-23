import { Category } from '../../apiClient/types';

export const APPBAR_SET_HEADER = 'appbar/setHeader';
export const APPBAR_SET_CATEGORIES = 'appbar/setCategories';

export type AppbarSetHeader = {
    type: typeof APPBAR_SET_HEADER;
    payload: string[];
};
export type AppbarSetCategories = {
    type: typeof APPBAR_SET_CATEGORIES;
    payload: Category[];
};

export type AppbarDispatchTypes = AppbarSetHeader | AppbarSetCategories;
