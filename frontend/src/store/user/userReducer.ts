import { User } from '../../apiClient/types';
import { UserDispatchTypes, USER_EMAIL_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOADING, USER_CLEAR_DATA, USER_LOGGING_IN_FROM_COOKIES, USER_EMAIL_SIGNUP_FAIL, USER_CLEAR_ERRORS } from './actionTypes';

type UserState = {
    user?: User;
    isLoading: boolean;
    loggingInFromCookies: boolean;
    loginErrorMessage?: string;
    signupErrorMessage?: string;
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
                loginErrorMessage: action.payload
            };
        case USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                loggingInFromCookies: false,
                user: action.payload
            };
        case USER_CLEAR_DATA:
            return {
                isLoading: false,
                loggingInFromCookies: false
            };
        case USER_CLEAR_ERRORS:
            return {
                ...state,
                loginErrorMessage: undefined,
                signupErrorMessage: undefined
            };
        case USER_LOGGING_IN_FROM_COOKIES:
            return {
                isLoading: false,
                loggingInFromCookies: true
            };
        case USER_EMAIL_SIGNUP_FAIL:
            return {
                isLoading: false,
                loggingInFromCookies: false,
                signupErrorMessage: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;