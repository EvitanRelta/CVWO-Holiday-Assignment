import { User } from '../../apiClient/types';


export const USER_LOADING = 'user/loading';
export const USER_LOGIN_SUCCESS = 'user/emailLoginSuccess';
export const USER_EMAIL_LOGIN_FAIL = 'user/emailLoginFail';
export const USER_EMAIL_SIGNUP_FAIL = 'user/emailSignupFail';
export const USER_CLEAR_DATA = 'user/clearData';
export const USER_LOGGING_IN_FROM_COOKIES = 'user/loggingInFromCookies';

export type UserLoading = {
    type: typeof USER_LOADING;
};

export type UserLoginSuccess = {
    type: typeof USER_LOGIN_SUCCESS;
    payload: User;
};

export type UserEmailLoginFail = {
    type: typeof USER_EMAIL_LOGIN_FAIL;
    payload: string;
};

export type UserEmailSignupFail = {
    type: typeof USER_EMAIL_SIGNUP_FAIL;
    payload: string;
};

export type UserClearData = {
    type: typeof USER_CLEAR_DATA;
};

export type UserLoggingInFromCookies = {
    type: typeof USER_LOGGING_IN_FROM_COOKIES;
}

export type UserDispatchTypes = UserLoading | UserLoginSuccess | UserEmailLoginFail | UserClearData | UserLoggingInFromCookies | UserEmailSignupFail;
