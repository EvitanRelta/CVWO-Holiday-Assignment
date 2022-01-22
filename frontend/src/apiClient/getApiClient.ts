import { AxiosInstance } from 'axios';
import { RawTasks, RawUser, Task, User } from './types';
import { AuthAxiosInstance } from './getAuthAxiosInstance';
import { transformRawUser, transformRawTasks } from './rawDataTransformers';
import Lodash from 'lodash';
import Axios from 'axios';
import signInErrorTransformer from './errorHandlers/signInErrorTransformer';
import signupErrorTransformer from './errorHandlers/signupErrorTransformer';

export type AuthMethods = {
    hasAuthTokens: () => boolean;
    validateToken: () => Promise<User>;
    emailSignUp: (email: string, password: string, passwordConfirmation: string) => Promise<User>;
    emailSignIn: (email: string, password: string) => Promise<User>;
    signOut: () => Promise<void>;
    //passwordResetRequest: () => Promise<true>;
};

export type ApiMethods = {
    getTasks: () => Promise<Task[]>;
};

export type ApiClient = AuthMethods & ApiMethods;

const getApiClient = (authAxiosInstance: AuthAxiosInstance): ApiClient => {
    const authMethods: AuthMethods = {
        hasAuthTokens: authAxiosInstance.hasAuthTokens,
        validateToken: async () => {
            const { data: rawUser } = await authAxiosInstance.get('/auth/validate_token');
            return transformRawUser(rawUser as RawUser);
        },
        emailSignIn: async (email, password) => {
            try {
                const { data: rawUser } = await authAxiosInstance.post('/auth/sign_in', { email, password });
                return transformRawUser(rawUser as RawUser);
            } catch (err) {
                throw signInErrorTransformer(err as Error);
            }
        },
        emailSignUp: async (email, password, passwordConfirmation) => {
            try {
                const { data: rawUser } = await authAxiosInstance.post('/auth', { email, password, 'password_confirmation': passwordConfirmation });
                return transformRawUser(rawUser as RawUser);
            } catch (err) {
                throw signupErrorTransformer(err as Error);
            }
        },
        signOut: async () => {
            await authAxiosInstance.delete('/auth/sign_out');
            authAxiosInstance.clearAuthHeadersAndCookies();
        }
    };

    const apiMethods: ApiMethods = {
        getTasks: async () => {
            const { data: rawTasks } = await authAxiosInstance.get('/tasks');
            return transformRawTasks(rawTasks as RawTasks);
        },
    };
    return Lodash.assign({}, authMethods, apiMethods);
};

export default getApiClient;