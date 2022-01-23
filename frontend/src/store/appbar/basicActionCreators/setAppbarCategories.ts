import { Category } from '../../../apiClient/types';
import { AppbarSetCategories, APPBAR_SET_CATEGORIES } from '../actionTypes';


export default (categories: Category[]): AppbarSetCategories => ({
    type: APPBAR_SET_CATEGORIES,
    payload: categories
});