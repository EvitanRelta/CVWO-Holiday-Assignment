import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AccountCircle } from '@mui/icons-material';
import { RootState } from '../../../store/combinedReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../store/isDarkMode/actionCreators';
import { Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface UserMenuButtonProps {}

const UserMenuButton = ({}: UserMenuButtonProps) => {
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
    const dispatch = useDispatch();

    const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton
                    onClick={handleOpenUserMenu}
                    color="inherit"
                    sx={{ p: 0 }}
                >
                    <AccountCircle
                        fontSize='large'
                    />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem key={'profile'} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key={'logout'} onClick={() => navigate('../login')}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                <MenuItem key={'Dark'}>
                    <Typography textAlign="center">Dark Mode</Typography>
                    <Switch
                        color='default'
                        checked={isDarkMode}
                        onChange={() => dispatch(toggleDarkMode())}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </MenuItem>
            </Menu>
        </Box>
    );
};
export default UserMenuButton;
export type { UserMenuButtonProps };