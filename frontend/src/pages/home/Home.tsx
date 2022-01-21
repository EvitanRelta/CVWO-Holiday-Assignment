import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';

import { AppBar, Toolbar, Box, Button, Paper, Stack, TextField, Typography, IconButton, CssBaseline, useMediaQuery, Link } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DarkMode, Google } from '@mui/icons-material';

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