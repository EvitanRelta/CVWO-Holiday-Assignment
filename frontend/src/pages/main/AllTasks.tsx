import React, { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import Tasks from './components/Tasks';
import getAllTasks from '../../store/tasks/thunkActionCreators/getAllTasks';

interface HomeProps {}

const AllTasks = ({}: HomeProps) => {
    const tasksState = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllTasks())
    }, []);


    return (
        <Tasks tasks={tasksState.tasks} />
    );
};

export default AllTasks;