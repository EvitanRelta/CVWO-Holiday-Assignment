import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Tasks, AddItemDial } from './components';
import getAllTasks from '../../store/tasks/thunkActionCreators/getAllTasks';
import setAppbarHeader from '../../store/appbar/basicActionCreators/setAppbarHeader';

interface HomeProps {}

const AllTasks = ({}: HomeProps) => {
    const tasksState = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setAppbarHeader('All Tasks'));
        dispatch(getAllTasks());
    }, []);


    return (
        <>
            <Tasks tasks={tasksState.tasks} />
            <AddItemDial />
        </>
    );
};

export default AllTasks;