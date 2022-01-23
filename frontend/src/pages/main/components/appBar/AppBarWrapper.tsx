import * as React from 'react';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import SideBar, { SideBarProps } from './sideBar/SideBar';
import UserMenuButton from './UserMenuButton';
import { Outlet } from 'react-router-dom';


const drawerWidth = 240;

const AppBarWrapper: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sideBarProps: SideBarProps = {
        items: [
            {
                text: 'New Category',
                onClick: ()=>null
            }
        ],
        categories: [
            {
                name: 'Category 1',
                tagItems: [
                    {name: 'Tag 1', onClick:()=>null},
                    {name: 'Tag 2', onClick:()=>null},
                ]
            },
            {
                name: 'Category 2',
                tagItems: [
                    {name: 'Tag 3', onClick:()=>null},
                    {name: 'Tag 4', onClick:()=>null},
                ]
            }
        ]
    };
    const drawer = (
        <SideBar {...sideBarProps} />
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position='fixed'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        Responsive drawer
                    </Typography>
                    <Box
                        sx={{marginLeft: 'auto'}}
                    >
                        <UserMenuButton />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                color='inherit'
            >
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundImage: 'none' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                color='inherit'
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default AppBarWrapper;