import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Tasks, AddItemDial } from './components';
import getAllTasks from '../../store/data/thunkActionCreators/getAllTasks';
import setAppbarHeader from '../../store/appbar/basicActionCreators/setAppbarHeader';

interface HomeProps {}

const AllTasks = ({}: HomeProps) => {
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setAppbarHeader('All Tasks'));
        dispatch(getAllTasks());
    }, []);


    return (
        <>
            <Tasks tasks={data.tasks} />
            <AddItemDial />
        </>
    );
};

export default AllTasks;