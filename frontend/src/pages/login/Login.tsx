import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Paper, Stack, TextField, Typography, IconButton, Link, Alert, Box, CircularProgress } from '@mui/material';
import { DarkMode, Google } from '@mui/icons-material';
import { PwVisibilityIconAdornment, LoginSignupContainer, ErrorAlert } from '../components';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import toggleDarkMode from '../../store/isDarkMode/thunkActionCreators/toggleDarkMode';
import emailSignIn from '../../store/user/thunkActionCreators/emailSignIn';
import setEmailLoginError from '../../store/user/basicActionCreators/setEmailLoginError';
import clearLoginSignupErrors from '../../store/user/basicActionCreators/clearLoginSignupErrors';


interface LoginProps {}

const Login = ({}: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [hasEmailError, setHasEmailError] = useState(false);
    const [hasPasswordError, setHasPasswordError] = useState(false);

    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleSubmission = async () => {
        setHasEmailError(!Boolean(email));
        setHasPasswordError(!Boolean(password));
        if (!email || !password)
            return;
        dispatch(emailSignIn(email, password));
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter') return;
        handleSubmission();
    };

    useEffect(() => {
        const clearErrorsOnNavigate = () => { dispatch(clearLoginSignupErrors()) };
        return clearErrorsOnNavigate;
    }, []);

    return (
        <LoginSignupContainer>
            <Stack spacing={2}>
                <Typography variant='h4'>Log in</Typography>
                <Button
                    fullWidth
                    disabled={userState.isLoading}
                    variant='contained'
                    onClick={handleSubmission}
                    startIcon={<Google />}
                    color='google'
                >
                    Continue with Google
                </Button>
                <Typography align='center'>or</Typography>
                <TextField
                    error={hasEmailError}
                    helperText={(hasEmailError && !email) ? 'Cannot be empty' : ''}
                    disabled={userState.isLoading}
                    color='primary'
                    autoFocus
                    variant='outlined'
                    id='email'
                    label='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyPress={e => {
                        setHasEmailError(false);
                        handleKeyPress(e);
                    }}
                />
                <TextField
                    error={hasPasswordError}
                    helperText={(hasPasswordError && !password) ? 'Cannot be empty' : ''}
                    disabled={userState.isLoading}
                    variant='outlined'
                    id='password'
                    label='Password'
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => {
                        setHasPasswordError(false);
                        handleKeyPress(e);
                    }}
                    InputProps={{
                        endAdornment: <PwVisibilityIconAdornment
                            isPasswordVisible={isPasswordVisible}
                            onClick={() => setIsPasswordVisible(state => !state)}
                        />
                    }}
                />
                {userState.loginErrorMessage
                    ? <ErrorAlert text={userState.loginErrorMessage} />
                    : null
                }
                <Button
                    fullWidth
                    disabled={userState.isLoading}
                    variant='contained'
                    onClick={handleSubmission}
                >
                    {userState.isLoading
                        ? <CircularProgress color='inherit' size={24.5} />
                        : 'Login'
                    }
                </Button>
                <Box>
                    {userState.isLoading
                        ? <Typography color='hyperlink.disabled' sx={{textDecoration: 'underline'}}>Create new account</Typography>
                        : <Link color='hyperlink.main' to='/signup' component={RouterLink}>Create new account</Link>
                    }
                    <IconButton
                        onClick={() => dispatch(toggleDarkMode())}
                        sx={{ float: 'right' }}
                        tabIndex={-1}
                    >
                        <DarkMode />
                    </IconButton>
                </Box>
            </Stack>
        </LoginSignupContainer>
    );
};

export default Login;