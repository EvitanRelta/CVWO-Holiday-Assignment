import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Tasks, AddItemDial } from './components';
import getTasksAndCategories from '../../store/data/thunkActionCreators/getTasksAndCategories';
import setAppbarHeader from '../../store/appbar/basicActionCreators/setAppbarHeader';

interface HomeProps {}

const AllTasks = ({}: HomeProps) => {
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setAppbarHeader('All Tasks'));
        dispatch(getTasksAndCategories());
    }, []);


    return (
        <>
            <Tasks tasks={data.tasks} />
            <AddItemDial />
        </>
    );
};

export default AllTasks;