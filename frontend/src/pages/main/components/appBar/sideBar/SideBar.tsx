import React from 'react';
import { Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Logo } from '../../../../components';
import CategoryList from './CategoryList'


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
            <ListItem
                button
                onClick={()=>undefined}
            >
                <ListItemText primary={'Click me'} />
            </ListItem>
        </List>
        <Divider />
        <CategoryList />
    </>
);

export default SideBar;