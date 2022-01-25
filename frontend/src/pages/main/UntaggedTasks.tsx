import Lodash from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectUntagged from '../../store/appbar/thunkActionCreators/selectUntagged';
import getTasksAndCategories from '../../store/data/thunkActionCreators/getTasksAndCategories';
import { RootState } from '../../store/rootReducer';
import { AddItemDial, Tasks } from './components';
import DeleteDialog from './components/dialogs/DeleteDialog';

const UntaggedTasks = () => {
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksAndCategories());
    }, []);

    useEffect(() => {
        if (data.hasInitData)
            dispatch(selectUntagged());
    }, [data.hasInitData])

    const untaggedTasks = Lodash.filter(data.tasks, task => Lodash.isEmpty(task.categories));

    return (
        <>
            <Tasks tasks={untaggedTasks} />
            <AddItemDial />
            <DeleteDialog />
        </>
    );
};

export default UntaggedTasks;