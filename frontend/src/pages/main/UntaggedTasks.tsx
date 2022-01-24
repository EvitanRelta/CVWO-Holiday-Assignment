import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Tasks, AddItemDial } from './components';
import getTasksAndCategories from '../../store/data/thunkActionCreators/getTasksAndCategories';
import selectUntagged from '../../store/appbar/thunkActionCreators/selectUntagged';
import Lodash from 'lodash';

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
        </>
    );
};

export default UntaggedTasks;