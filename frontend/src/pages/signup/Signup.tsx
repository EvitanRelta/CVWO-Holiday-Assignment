import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField, Typography, IconButton, Link, Box } from '@mui/material';
import { DarkMode } from '@mui/icons-material';
import { PwVisibilityIconAdornment, LoginSignupContainer } from '../components';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../store/isDarkMode/actionCreators';


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
    const dispatch = useDispatch();

    return (
        <LoginSignupContainer>
            <Stack spacing={2}>
                <Typography variant='h4'>Sign up</Typography>
                <TextField
                    color='primary'
                    autoFocus
                    variant='outlined'
                    id='nickname'
                    label='Nickname'
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    color='primary'
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
                <TextField
                    required
                    variant='outlined'
                    id='password-confirmation'
                    label='Confirm Password'
                    type={isConfirmPwVisible ? 'text' : 'password'}
                    value={passwordConfirmation}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    InputProps={{
                        endAdornment: <PwVisibilityIconAdornment
                            isPasswordVisible={isConfirmPwVisible}
                            onClick={() => setIsConfirmPwVisible(state => !state)}
                        />
                    }}
                />
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

const handleSubmission = async () => {
    console.log('Logging in.');
};
const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    handleSubmission()
};

export default Signup;