import { User } from '../../apiClient/types';
import { UserDispatchTypes, USER_EMAIL_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOADING, USER_SIGNED_OUT, USER_LOGGING_IN_FROM_COOKIES } from './actionTypes';

type UserState = {
    user?: User;
    isLoading: boolean;
    loggingInFromCookies: boolean;
    errorMessage?: string;
};

const initialState: UserState = {
    isLoading: false,
    loggingInFromCookies: true
};

const userReducer = (state: UserState = initialState, action: UserDispatchTypes): UserState => {
    switch (action.type) {
        case USER_LOADING:
            return {
                isLoading: true,
                loggingInFromCookies: false
            };
        case USER_EMAIL_LOGIN_FAIL:
            return {
                isLoading: false,
                loggingInFromCookies: false,
                errorMessage: action.payload
            };
        case USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                loggingInFromCookies: false,
                user: action.payload
            };
        case USER_SIGNED_OUT:
            return {
                isLoading: false,
                loggingInFromCookies: false
            };
        case USER_LOGGING_IN_FROM_COOKIES:
            return {
                isLoading: false,
                loggingInFromCookies: true
            };
        default:
            return state;
    }
};

export default userReducer;