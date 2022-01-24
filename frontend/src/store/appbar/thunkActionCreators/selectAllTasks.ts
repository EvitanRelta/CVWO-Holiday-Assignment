import { Dispatch } from 'react';
import { AppbarDispatchTypes, APPBAR_ALL_TASKS, APPBAR_SELECT_UNTAGGED } from '../actionTypes';
import setAppbarHeader from '../basicActionCreators/setAppbarHeader';

export default () => async (dispatch: Dispatch<AppbarDispatchTypes>) => {
    dispatch({ type: APPBAR_ALL_TASKS });
    dispatch(setAppbarHeader('All Tasks'));
};