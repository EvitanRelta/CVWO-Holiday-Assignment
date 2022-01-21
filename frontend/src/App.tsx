import React from 'react';
import { Login, TestRoutesHome, Signup, Home } from './pages';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { darkTheme, lightTheme } from './themes';

interface AppProps {}

const App = ({}: AppProps) => {
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<TestRoutesHome />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;