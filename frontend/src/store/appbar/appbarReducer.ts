import { AppbarDispatchTypes, APPBAR_SET_CATEGORIES, APPBAR_SET_HEADER } from './actionTypes';
import { Category } from '../../apiClient/types';


type AppbarState = {
    header: string[];
    categories: Category[];
};

const initialState: AppbarState = {
    header: [],
    categories: []
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
        default:
            return state;
    }
};

export default appbarReducer;