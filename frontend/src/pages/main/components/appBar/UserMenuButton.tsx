import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AccountCircle } from '@mui/icons-material';
import { RootState } from '../../../../store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import toggleDarkMode from '../../../../store/isDarkMode/thunkActionCreators/toggleDarkMode';
import { Switch, Divider } from '@mui/material';
import signOut from '../../../../store/user/thunkActionCreators/signOut';


interface UserMenuButtonProps {}

const UserMenuButton = ({}: UserMenuButtonProps) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
    const userState = useSelector((state: RootState) => state.user);
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
                <Typography sx={{
                    fontWeight: 'bold',
                    paddingX: 2,
                    paddingY: 1.5,
                    textAlign: 'center'
                }}>
                    {userState.user?.nickname || userState.user?.email}
                </Typography>
                <Divider />
                <MenuItem key={'profile'} onClick={handleCloseUserMenu}>
                    <Typography>Profile</Typography>
                </MenuItem>
                <MenuItem key={'logout'} onClick={() => dispatch(signOut())}>
                    <Typography>Logout</Typography>
                </MenuItem>
                <MenuItem key={'Dark'} onClick={() => dispatch(toggleDarkMode())}>
                    <Typography>Dark Mode</Typography>
                    <Switch
                        color='default'
                        size='small'
                        checked={isDarkMode}
                        sx={{ marginLeft: 'auto', marginRight: 0 }}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </MenuItem>
            </Menu>
        </Box>
    );
};
export default UserMenuButton;
export type { UserMenuButtonProps };