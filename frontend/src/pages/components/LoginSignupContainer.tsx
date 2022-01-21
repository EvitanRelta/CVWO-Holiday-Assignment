import { Paper, styled } from '@mui/material';
import React from 'react';
import Center from './Center';


const StyledPaper = styled(Paper)({
    maxWidth: 400,
    width: '100%',
    margin: 7,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
    paddingBottom: 30
});

const LoginSignupContainer: React.FC = ({ children }) => (
    <Center>
        <StyledPaper variant='outlined'>
            {children}
        </StyledPaper>
    </Center>
);

export default LoginSignupContainer;