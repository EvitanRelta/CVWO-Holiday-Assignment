import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';
import { useMediaQuery } from '@mui/material';

interface HomeProps {}

const Home = ({}: HomeProps) => {
    const hasSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const [isDarkMode, setIsDarkMode] = useState(hasSystemDarkMode);


    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        </ThemeProvider>
    );
};

export default Home;