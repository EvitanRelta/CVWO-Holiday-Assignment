import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight, themeDark } from '../../themes';
import { Button, Paper, Stack, TextField, Typography, IconButton, CssBaseline, useMediaQuery } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    width: 400,
    height: 390,
    left: 'calc(50% - 400px/2)',
    top: 'calc(50% - 400px/2 - 0.5px)',
    padding: 40
}));

const StyledDarkModeIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    width: 45,
    height: 45,
    right: 20,
    bottom: 20
}));

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hasSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const [isDarkMode, setIsDarkMode] = useState(hasSystemDarkMode);

    return (
        <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
            <CssBaseline />
            <StyledPaper variant='outlined'>
                <Stack spacing={3}>
                    <Typography variant='h4'>Log in</Typography>
                    <TextField
                        color='primary'
                        autoFocus
                        variant='outlined'
                        id='email'
                        label='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        variant='outlined'
                        id='password'
                        label='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button
                        variant='contained'
                        onClick={handleSubmission}
                        sx={{ width:'100%' }}
                    >
                        Login
                    </Button>
                </Stack>
                <StyledDarkModeIconButton
                    onClick={e => setIsDarkMode(state => !state)}
                >
                    <DarkMode />
                </StyledDarkModeIconButton>
            </StyledPaper>
        </ThemeProvider>
    );
};

const handleSubmission = async () => {
    console.log('Logging in.');

};
const handleKeyPress = e => {
    if (e.key !== 'Enter') return;
    handleSubmission()
};

export default Login;