import { Dispatch } from 'react';
import { RootState } from '../../rootReducer';
import { AppbarDispatchTypes, APPBAR_SET_SELECTED_TAG } from '../actionTypes';
import setAppbarHeader from '../basicActionCreators/setAppbarHeader';
import Lodash from 'lodash';

export default (tagId: number | null) => async (dispatch: Dispatch<AppbarDispatchTypes>, getState: () => RootState) => {
    if (tagId === null)
        return dispatch(setAppbarHeader('All Tasks'));
    
    const { data } = getState();
    const category = Lodash.find(data.categories, { tags: [{ id: tagId }] });
    const tag = category?.tags.find(tag => tag.id === tagId);

    if (!category || !tag)
        return dispatch(setAppbarHeader('[TAG NOT FOUND]'));

    dispatch({
        type: APPBAR_SET_SELECTED_TAG,
        payload: tag
    });
    dispatch(setAppbarHeader([category.name, tag.name]));
};