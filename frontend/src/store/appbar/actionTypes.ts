export const APPBAR_SET_HEADER = 'user/setHeader';

export type AppbarSetHeader = {
    type: typeof APPBAR_SET_HEADER;
    payload: string[];
};


export type AppbarDispatchTypes = AppbarSetHeader;
