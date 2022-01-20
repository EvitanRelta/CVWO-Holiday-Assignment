import getAuthAxiosInstance from './getAuthAxiosInstance';
import getApiClient, { ApiClient } from './getApiClient';

const authAxiosInstance = getAuthAxiosInstance({
    baseURL: 'http://localhost:3000/api'
});
const apiClient = getApiClient(authAxiosInstance);

export default apiClient;
export type { ApiClient };