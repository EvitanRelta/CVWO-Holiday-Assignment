import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Paper, Stack, TextField, Typography, IconButton, Link, Alert, Box } from '@mui/material';
import { DarkMode, Google } from '@mui/icons-material';
import { PwVisibilityIconAdornment, LoginSignupContainer } from '../components';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/isDarkMode/actionCreators';
import emailSignIn from '../../store/user/thunkActionCreators/emailSignIn';


interface LoginProps {}

const FullWidthButton = styled(Button)({
    width: '100%'
});

const Login = ({}: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleSubmission = async () => {
        //navigate('/home');
        dispatch(emailSignIn(email, password));
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter') return;
        handleSubmission();
    };


    return userState.user
    ? <Navigate to={'../home'} replace />
    : (
        <LoginSignupContainer>
            <Stack spacing={2}>
                <Typography variant='h4'>Log in</Typography>
                <FullWidthButton
                    disabled={userState.isLoading}
                    variant='contained'
                    onClick={handleSubmission}
                    startIcon={<Google />}
                    color='google'
                >
                    Continue with Google
                </FullWidthButton>
                <Typography align='center'>or</Typography>
                <TextField
                    disabled={userState.isLoading}
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
                    disabled={userState.isLoading}
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
                {userState.loginErrorMessage
                    ? <Alert severity="error">{userState.loginErrorMessage}</Alert>
                    : null
                }
                <FullWidthButton
                    disabled={userState.isLoading}
                    variant='contained'
                    onClick={handleSubmission}
                >
                    Login
                </FullWidthButton>
                <Box>
                {userState.isLoading
                    ? <Typography color='hyperlink.disabled' sx={{textDecoration: 'underline'}}>Create new account</Typography>
                    : <Link color='hyperlink.main' to='/signup' component={RouterLink}>Create new account</Link>
                }
                <IconButton
                    onClick={() => dispatch(toggleDarkMode())}
                    sx={{ float: 'right' }}
                >
                    <DarkMode />
                </IconButton>
                </Box>
            </Stack>
        </LoginSignupContainer>
    );
};

export default Login;