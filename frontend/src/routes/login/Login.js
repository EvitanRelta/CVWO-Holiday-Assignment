import React, { useState } from 'react';
import { Button, Paper, Stack, TextField } from '@mui/material';

const userLogin = async (client, email, password) => {
    try {
        await client.emailSignIn({
            email,
            password
        });
    } catch (e) {
        console.error(e);
    }
};

const Login = ({ client }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmission = async () => {
        console.log('enter', client);
        console.log(await userLogin(client, email, password));
    };
    const handleKeyPress = e => {
        if (e.key !== 'Enter') return;
        handleSubmission()
    };
    return (
        <>
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
                        onKeyPress={e => handleKeyPress}
                    />
                    <Button
                        variant='contained'
                        onClick={handleSubmission}
                    >
                        Login
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default Login;