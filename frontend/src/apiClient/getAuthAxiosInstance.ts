import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Lodash from 'lodash';
import Cookies from 'js-cookie';


type GetAuthAxiosInstance = {
    baseURL: string;
    timeout?: number;
};

export type AuthAxiosInstance = AxiosInstance & {
    hasAuthTokens: () => boolean;
    clearAuthHeadersAndCookies: () => void;
};

const getAuthAxiosInstance = ({ baseURL, timeout=10000 }: GetAuthAxiosInstance): AuthAxiosInstance => {
    const authAxiosInstance = axios.create({
        baseURL,
        timeout
    });
    const authHeaders = {
        'token-type': 'Bearer',
        'access-token': Cookies.get('access-token'),
        client: Cookies.get('client'),
        uid: Cookies.get('uid'),
        expiry: Cookies.get('expiry')
    };

    const saveAuthHeadersToCookies = () => {
        for (const [header, value] of Object.entries(authHeaders))
            Cookies.set(header, value as string);
    };
    const clearAuthHeadersAndCookies = () => {
        authHeaders['access-token'] = undefined;
        authHeaders.client = undefined;
        authHeaders.uid = undefined;
        authHeaders.expiry = undefined;

        for (const header in authHeaders)
            Cookies.remove(header);
    };


    // Request Interception
    const hasAuthTokens = () => Boolean(authHeaders['access-token'] && authHeaders.client && authHeaders.uid);
    const setAuthHeaders = (config: AxiosRequestConfig) => hasAuthTokens()
        ? Lodash.assign({}, config, { headers: authHeaders })
        : config;
    authAxiosInstance.interceptors.request.use(setAuthHeaders);


    // Response Interception
    const updateAuthHeaders = (res: AxiosResponse) => {
        const removedEmptyHeaders = Lodash.pickBy(res.headers, Lodash.identity);
        const newAuthHeaders = Lodash.pick(removedEmptyHeaders, Lodash.keys(authHeaders));
        Lodash.assign(authHeaders, newAuthHeaders);
        saveAuthHeadersToCookies();
        return res;
    };
    const clearAuthHeadersOn401 = (error: any) => {
        const hasInvalidAuthCred = error.response?.status === 401;
        if (hasInvalidAuthCred)
                clearAuthHeadersAndCookies();
        return Promise.reject(error);
    }
    authAxiosInstance.interceptors.response.use(updateAuthHeaders, clearAuthHeadersOn401);

    return Lodash.assign(authAxiosInstance, {
        hasAuthTokens,
        clearAuthHeadersAndCookies
    });
};

export default getAuthAxiosInstance;