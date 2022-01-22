import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField, Typography, IconButton, Link, Box, Alert } from '@mui/material';
import { DarkMode, Email, NineK, Password } from '@mui/icons-material';
import { PwVisibilityIconAdornment, LoginSignupContainer } from '../components';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/isDarkMode/actionCreators';
import emailSignup from '../../store/user/thunkActionCreators/emailSignup';
import setEmailSignupError from '../../store/user/basicActionCreators/setEmailSignupError';
import clearLoginSignupErrors from '../../store/user/basicActionCreators/clearLoginSignupErrors';


interface SignupProps {}

const FullWidthButton = styled(Button)({
    width: '100%'
});

const Signup = ({}: SignupProps) => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPwVisible, setIsConfirmPwVisible] = useState(false);

    const [hasNicknameError, setHasNicknameError] = useState(false);
    const [hasEmailError, setHasEmailError] = useState(false);
    const [hasPasswordError, setHasPasswordError] = useState(false);
    const [hasPasswordConfirmationError, setHasPasswordConfirmationError] = useState(false);

    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleSubmission = async () => {
        setHasNicknameError(!Boolean(nickname));
        setHasEmailError(!Boolean(email));
        setHasPasswordError(!Boolean(password));
        setHasPasswordConfirmationError(!Boolean(passwordConfirmation));
        if (!nickname || !email || !password || !passwordConfirmation)
            return;
        if (password !== passwordConfirmation) {
            setHasPasswordError(true);
            setHasPasswordConfirmationError(true);
            dispatch(setEmailSignupError('Passwords don\'t match.'));
            return;
        }
        dispatch(emailSignup(email, password, passwordConfirmation));
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter') return;
        handleSubmission()
    };

    useEffect(() => {
        const clearErrorsOnNavigate = () => { dispatch(clearLoginSignupErrors()) };
        return clearErrorsOnNavigate;
    }, []);

    return userState.user
    ? <Navigate to={'../home'} replace />
    : (
        <LoginSignupContainer>
            <Stack spacing={2}>
                <Typography variant='h4'>Sign up</Typography>
                <TextField
                    error={hasNicknameError && !nickname}
                    helperText={(hasNicknameError && !nickname) ? 'Cannot be empty' : ''}
                    color='primary'
                    autoFocus
                    variant='outlined'
                    id='nickname'
                    label='Nickname'
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    onKeyPress={e => {
                        setHasNicknameError(false);
                        handleKeyPress(e);
                    }}
                />
                <TextField
                    error={hasEmailError && !email}
                    helperText={(hasEmailError && !email) ? 'Cannot be empty' : ''}
                    color='primary'
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
                <TextField
                    error={hasPasswordConfirmationError}
                    helperText={(hasPasswordConfirmationError && !passwordConfirmation) ? 'Cannot be empty' : ''}
                    variant='outlined'
                    id='password-confirmation'
                    label='Confirm Password'
                    type={isConfirmPwVisible ? 'text' : 'password'}
                    value={passwordConfirmation}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onKeyPress={e => {
                        setHasPasswordConfirmationError(false);
                        handleKeyPress(e);
                    }}
                    InputProps={{
                        endAdornment: <PwVisibilityIconAdornment
                            isPasswordVisible={isConfirmPwVisible}
                            onClick={() => setIsConfirmPwVisible(state => !state)}
                        />
                    }}
                />
                {userState.signupErrorMessage
                    ? <Alert severity="error">{userState.signupErrorMessage}</Alert>
                    : null
                }
                <FullWidthButton
                    variant='contained'
                    onClick={handleSubmission}
                >
                    Sign up
                </FullWidthButton>
                <Box>
                    <Link color='hyperlink.main' to='/login' component={RouterLink}>Login to existing account</Link>
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

export default Signup;