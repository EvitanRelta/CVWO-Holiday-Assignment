import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';
import { Button, Paper, Stack, TextField, Typography, IconButton, CssBaseline, useMediaQuery, Link } from '@mui/material';
import { DarkMode, Google } from '@mui/icons-material';
import { PwVisibilityIconAdornment } from '../components';
import { useNavigate, Link as RouterLink, Navigate } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/isDarkMode/actionCreators';
import emailSignIn from '../../store/user/thunkActionCreators/emailSignIn';

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
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
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
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <StyledPaper variant='outlined'>
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
                    <FullWidthButton
                        disabled={userState.isLoading}
                        variant='contained'
                        onClick={handleSubmission}
                    >
                        Login
                    </FullWidthButton>
                    {userState.isLoading
                        ? <Typography color='hyperlink.disabled' sx={{textDecoration: 'underline'}}>Create new account</Typography>
                        : <Link color='hyperlink.main' to='/signup' component={RouterLink}>Create new account</Link>
                    }
                </Stack>
                <StyledDarkModeIconButton
                    onClick={() => dispatch(toggleDarkMode())}
                >
                    <DarkMode />
                </StyledDarkModeIconButton>
            </StyledPaper>
        </ThemeProvider>
    );
};

export default Login;