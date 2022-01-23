export const APPBAR_SET_HEADER = 'appbar/setHeader';

export type AppbarSetHeader = {
    type: typeof APPBAR_SET_HEADER;
    payload: string[];
};


export type AppbarDispatchTypes = AppbarSetHeader;
