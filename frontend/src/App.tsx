import React, { useEffect } from 'react';
import { Login, TestRoutesHome, Signup, Home } from './pages';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CircularProgress, CssBaseline, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { darkTheme, lightTheme } from './themes';
import tryLoginFromCookies from './store/user/thunkActionCreators/tryLoginFromCookies';
import { Center } from './pages/components';

interface AppProps {}
console.log(darkTheme, lightTheme);
const App = ({}: AppProps) => {
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tryLoginFromCookies())
    }, []);
    
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {userState.loggingInFromCookies
                ? (
                    <Center>
                        <CircularProgress size={80} />
                    </Center>
                )
                : (
                    <Routes>
                        <Route path="/" element={<TestRoutesHome />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="home" element={<Home />} />
                    </Routes>
                )
            }
        </ThemeProvider>
    );
};

export default App;