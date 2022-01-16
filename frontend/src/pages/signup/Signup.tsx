import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes';
import { Button, Paper, Stack, TextField, Typography, IconButton, CssBaseline, useMediaQuery, Link } from '@mui/material';
import { DarkMode } from '@mui/icons-material';
import { PwVisibilityIconAdornment } from '../components';


interface SignupProps {}

const StyledPaper = styled(Paper)({
    position: 'absolute',
    width: 400,
    height: 500,
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

const Signup = ({}: SignupProps) => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPwVisible, setIsConfirmPwVisible] = useState(false);

    const hasSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const [isDarkMode, setIsDarkMode] = useState(hasSystemDarkMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <StyledPaper variant='outlined'>
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
                    <Link color='hyperlink.main' href='/login'>Login to existing account</Link>
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

export default Signup;