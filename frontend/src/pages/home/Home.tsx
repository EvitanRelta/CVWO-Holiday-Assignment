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

interface HomeProps {}

const Home = ({}: HomeProps) => {
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
    const dispatch = useDispatch();


    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <ResponsiveAppBar />
            <IconButton
                onClick={() => dispatch(toggleDarkMode())}
            >
                <DarkMode />
            </IconButton>
        </ThemeProvider>
    );
};

export default Home;