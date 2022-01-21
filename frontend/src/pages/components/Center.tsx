import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Center: React.FC = ({ children }) => (
    <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
    >
        {children}
    </Box> 
);

export default Center;