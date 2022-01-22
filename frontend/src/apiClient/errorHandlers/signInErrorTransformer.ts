import axios from 'axios';
import ApiError from '../ApiError';
import { ApiDataErrorTypes } from './errorTypes';

export default (err: Error) => {
    if (!axios.isAxiosError(err) || !err.response || err.response.status !== 401)
        return err;
    const rawErrors = err.response?.data as ApiDataErrorTypes;
    let errorMessage;
    if (rawErrors.errors instanceof Array)
        errorMessage = rawErrors.errors.join('\n');
    else
        errorMessage = rawErrors.errors.full_message.join('\n');
    return new ApiError(errorMessage);
}