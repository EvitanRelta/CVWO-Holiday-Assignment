import { AppbarDispatchTypes, APPBAR_SET_SELECTED_TAG, APPBAR_SET_CATEGORIES, APPBAR_SET_HEADER } from './actionTypes';
import { Category, Tag } from '../../apiClient/types';


type AppbarState = {
    header: string[];
    categories: Category[];
    selectedTag: Tag | null;
};

const initialState: AppbarState = {
    header: [],
    categories: [],
    selectedTag: null
};

const appbarReducer = (state=initialState, action: AppbarDispatchTypes): AppbarState => {
    switch (action.type) {
        case APPBAR_SET_HEADER:
            return {
                ...state,
                header: action.payload
            };
        case APPBAR_SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case APPBAR_SET_SELECTED_TAG:
            return {
                ...state,
                selectedTag: action.payload
            };
        default:
            return state;
    }
};

export default appbarReducer;