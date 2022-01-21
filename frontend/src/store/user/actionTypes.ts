import { User } from '../../apiClient/types';


export const USER_LOADING = 'user/loading';
export const USER_EMAIL_LOGIN_SUCCESS = 'user/emailLoginSuccess';
export const USER_EMAIL_LOGIN_FAIL = 'user/emailLoginFail';
export const USER_SIGNED_OUT = 'user/signOut';

export type UserLoading = {
    type: typeof USER_LOADING;
};

export type UserEmailLoginSuccess = {
    type: typeof USER_EMAIL_LOGIN_SUCCESS;
    payload: User;
};

export type UserEmailLoginFail = {
    type: typeof USER_EMAIL_LOGIN_FAIL;
    payload: string;
};

export type UserSignedOut = {
    type: typeof USER_SIGNED_OUT
}

export type UserDispatchTypes = UserLoading | UserEmailLoginSuccess | UserEmailLoginFail | UserSignedOut;
