import { Box, BoxProps } from '@mui/material';
import React from 'react';


const Center = (props: BoxProps) => (
    <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='absolute'
        left='50%'
        top='50%'
        sx={{ transform: 'translate(-50%, -50%)' }}
    >
        {props.children}
    </Box> 
);

export default Center;