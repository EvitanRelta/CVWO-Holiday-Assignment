import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


interface PasswordVisibilityIconAdornmentProps {
    isPasswordVisible: boolean;
    onClick: React.MouseEventHandler;
}

const PasswordVisibilityIconAdornment = ({ isPasswordVisible, onClick }: PasswordVisibilityIconAdornmentProps) => (
    <InputAdornment position="end">
        <IconButton
            onClick={onClick}
            edge="end"
        >
            {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>
);

export default PasswordVisibilityIconAdornment;