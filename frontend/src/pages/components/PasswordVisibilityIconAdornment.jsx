import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordVisibilityIconAdornment = ({ isPasswordVisible, onClick }) => (
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