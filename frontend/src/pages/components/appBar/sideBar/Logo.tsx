import { Typography, Avatar } from '@mui/material';
import React from 'react';


const logoImage = require('../../../../assets/logo_no_bg.png');

const Logo = () => (
    <>
        <Typography
            variant="h1"
            noWrap
            sx={{
                color: 'primary',
                fontWeight: 'bold',
                fontFamily: 'Garamond',
                fontSize: 30,
                textTransform: 'none'
            }}
        >
            TodoDex
        </Typography>
        <Avatar
            alt="TodoDex"
            src={logoImage}
            sx={{
                width: 30, 
                height: 30,
                marginLeft: 1,
                opacity: 0.85
            }}
        />
    </>
);

export default Logo;