import { User } from '../../apiClient/types';
import { UserDispatchTypes, USER_EMAIL_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOADING, USER_SIGNED_OUT } from './actionTypes';

type UserState = {
    user?: User;
    isLoading: boolean;
    errorMessage?: string;
};

const initialState: UserState = {
    isLoading: false
};

const userReducer = (state: UserState = initialState, action: UserDispatchTypes): UserState => {
    switch (action.type) {
        case USER_LOADING:
            return {
                isLoading: true
            };
        case USER_EMAIL_LOGIN_FAIL:
            return {
                isLoading: false,
                errorMessage: action.payload
            };
        case USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                user: action.payload
            };
        case USER_SIGNED_OUT:
            return {
                isLoading: false
            };
        default:
            return state;
    }
};

export default userReducer;