import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Paper, Stack, TextField } from '@mui/material';
import { CssBaseline } from '@mui/material';

const darkMode = false;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmission = async () => {
        console.log('Logging in.');
    };
    const handleKeyPress = e => {
        if (e.key !== 'Enter') return;
        handleSubmission()
    };
    return (
        <ThemeProvider theme={darkMode ? themeDark : themeLight}>
            <CssBaseline />
            <Paper 
                variant='outlined'
                sx={{ width:400, padding:5 }}
            >
                <h2>Login page</h2>
                <Stack>
                    <TextField
                        autoFocus
                        id='email'
                        label='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        id='password'
                        label='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button
                        variant='contained'
                        onClick={handleSubmission}
                    >
                        Login
                    </Button>
                </Stack>
            </Paper>
        </ThemeProvider>
    );
};

export default Login;