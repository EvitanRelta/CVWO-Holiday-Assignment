export default class ApiError extends Error {
    constructor(errorMessage: string) {
        super(errorMessage);
        this.name = 'ApiError';
    }
}