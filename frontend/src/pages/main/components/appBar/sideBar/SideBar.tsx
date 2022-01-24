import React from 'react';
import { Button, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Logo } from '../../../../components';
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom';
import { AllInbox, LabelOff } from '@mui/icons-material';


const SideBar = () => (
    <>
        <Toolbar>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                component={Button}
                color='inherit'
            >
                <Logo />
            </Grid>
        </Toolbar>
        <Divider />
        <List>
            <ListItemButton component={Link} to={`../all`}>
                <ListItemIcon>
                    <AllInbox />
                </ListItemIcon>
                <ListItemText primary={'All Tasks'} />
            </ListItemButton>
            <ListItemButton component={Link} to={`../untagged`}>
                <ListItemIcon>
                    <LabelOff />
                </ListItemIcon>
                <ListItemText primary={'Untagged Tasks'} />
            </ListItemButton>
        </List>
        <Divider />
        <CategoryList />
    </>
);

export default SideBar;