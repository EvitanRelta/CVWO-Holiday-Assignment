import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';
import { Button, Paper, Stack, TextField, Typography, IconButton, CssBaseline, useMediaQuery, Link } from '@mui/material';
import { DarkMode, Google } from '@mui/icons-material';
import { PwVisibilityIconAdornment } from '../components';


interface LoginProps {}

const StyledPaper = styled(Paper)({
    position: 'absolute',
    width: 400,
    height: 450,
    left: 'calc(50% - 400px/2)',
    top: 'calc(50% - 400px/2 - 0.5px)',
    padding: 40
});

const FullWidthButton = styled(Button)({
    width: '100%'
});

const StyledDarkModeIconButton = styled(IconButton)({
    position: 'absolute',
    width: 45,
    height: 45,
    right: 20,
    bottom: 20
});

const Login = ({}: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const hasSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const [isDarkMode, setIsDarkMode] = useState(hasSystemDarkMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <StyledPaper variant='outlined'>
                <Stack spacing={2}>
                    <Typography variant='h4'>Log in</Typography>
                    <FullWidthButton
                        variant='contained'
                        onClick={handleSubmission}
                        startIcon={<Google />}
                        color='google'
                    >
                        Continue with Google
                    </FullWidthButton>
                    <Typography align='center'>or</Typography>
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
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                        InputProps={{
                            endAdornment: <PwVisibilityIconAdornment
                                isPasswordVisible={isPasswordVisible}
                                onClick={() => setIsPasswordVisible(state => !state)}
                            />
                        }}
                    />
                    <FullWidthButton
                        variant='contained'
                        onClick={handleSubmission}
                    >
                        Login
                    </FullWidthButton>
                    <Link color='secondary' href='/signup'>Create new account</Link>
                </Stack>
                <StyledDarkModeIconButton
                    onClick={() => setIsDarkMode(state => !state)}
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
const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    handleSubmission()
};

export default Login;