import { UserEmailLoginFail, USER_EMAIL_LOGIN_FAIL } from '../actionTypes';


export default (errorMessage: string): UserEmailLoginFail => ({
    type: USER_EMAIL_LOGIN_FAIL,
    payload: errorMessage
});