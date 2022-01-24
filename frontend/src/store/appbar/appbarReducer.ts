import { AppbarDispatchTypes, APPBAR_SET_SELECTED_TAG, APPBAR_SET_HEADER, APPBAR_ALL_TASKS, APPBAR_SELECT_UNTAGGED } from './actionTypes';
import { Tag } from '../../apiClient/types';


type AppbarState = {
    header: string[];

    // undefined => all tasks
    // null => untagged tasks
    selectedTag?: Tag | null;
};

const initialState: AppbarState = {
    header: []
};

const appbarReducer = (state=initialState, action: AppbarDispatchTypes): AppbarState => {
    switch (action.type) {
        case APPBAR_SET_HEADER:
            return {
                ...state,
                header: action.payload
            };
        case APPBAR_SET_SELECTED_TAG:
            return {
                ...state,
                selectedTag: action.payload
            };
        case APPBAR_SELECT_UNTAGGED:
            return {
                ...state,
                selectedTag: null
            };
        case APPBAR_ALL_TASKS:
            return {
                ...state,
                selectedTag: undefined
            };
        default:
            return state;
    }
};

export default appbarReducer;