import { AppbarDispatchTypes, APPBAR_SET_HEADER } from './actionTypes';

type AppbarState = {
    header: string[];
    
};

const initialState: AppbarState = {
    header: []
};

const appbarReducer = (state=initialState, action: AppbarDispatchTypes): AppbarState => {
    switch (action.type) {
        case APPBAR_SET_HEADER:
            return {
                header: action.payload
            };
        default:
            return state;
    }
};

export default appbarReducer;