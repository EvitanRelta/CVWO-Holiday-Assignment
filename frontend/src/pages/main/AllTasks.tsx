import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectAllTasks from '../../store/appbar/thunkActionCreators/selectAllTasks';
import getTasksAndCategories from '../../store/data/thunkActionCreators/getTasksAndCategories';
import { RootState } from '../../store/rootReducer';
import { AddItemDial, Tasks } from './components';
import DeleteDialog from './components/dialogs/DeleteDialog';

interface HomeProps { }

const AllTasks = ({ }: HomeProps) => {
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(selectAllTasks());
        dispatch(getTasksAndCategories());
    }, []);


    return (
        <>
            <Tasks tasks={data.tasks} />
            <AddItemDial />
            <DeleteDialog />
        </>
    );
};

export default AllTasks;