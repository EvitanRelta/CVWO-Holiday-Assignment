import { UserEmailSignupFail, USER_EMAIL_SIGNUP_FAIL } from '../actionTypes';


export default (errorMessage: string): UserEmailSignupFail => ({
    type: USER_EMAIL_SIGNUP_FAIL,
    payload: errorMessage
});