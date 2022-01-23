import { AppbarSetHeader, APPBAR_SET_HEADER } from '../actionTypes';


export default (header: string | string[]): AppbarSetHeader => (
    typeof header === 'string'
        ? {
            type: APPBAR_SET_HEADER,
            payload: [header]
        }
        : {
            type: APPBAR_SET_HEADER,
            payload: header
        }
);