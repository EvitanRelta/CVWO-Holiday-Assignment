import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


interface PwVisibilityIconAdornmentProps {
    isPasswordVisible: boolean;
    onClick: React.MouseEventHandler;
}

const PwVisibilityIconAdornment = ({ isPasswordVisible, onClick }: PwVisibilityIconAdornmentProps) => (
    <InputAdornment position="end">
        <IconButton
            onClick={onClick}
            edge="end"
        >
            {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>
);

export default PwVisibilityIconAdornment;