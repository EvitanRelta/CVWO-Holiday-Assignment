import React from 'react';
import { IconButton } from '@mui/material';
import { DarkMode } from '@mui/icons-material';
import { ResponsiveAppBar } from '../components';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/isDarkMode/actionCreators';
import { Navigate } from 'react-router-dom';

interface HomeProps {}

const Home = ({}: HomeProps) => {
    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();


    return !userState.user
    ? <Navigate to={'../login'} replace />
    : (
       <>
            <ResponsiveAppBar />
            <IconButton
                onClick={() => dispatch(toggleDarkMode())}
            >
                <DarkMode />
            </IconButton>
       </>
    );
};

export default Home;