import React, { useEffect } from 'react';
import { AppBarWrapper } from '../components';
import { RootState } from '../../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Tasks from '../components/Tasks';
import getAllTasks from '../../../store/tasks/thunkActionCreators/getAllTasks';

interface HomeProps {}

const Home = ({}: HomeProps) => {
    const userState = useSelector((state: RootState) => state.user);
    const tasksState = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllTasks())
    }, []);


    return !userState.user
    ? <Navigate to={'../login'} replace />
    : (
       <>
            <AppBarWrapper> 
                <Tasks tasks={tasksState.tasks} />
            </AppBarWrapper>
       </>
    );
};

export default Home;