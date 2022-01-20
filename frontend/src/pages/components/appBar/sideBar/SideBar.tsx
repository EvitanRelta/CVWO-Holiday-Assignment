import React from 'react';
import { Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import Logo from './Logo';
import CategoryList, { CategoryListProps } from './CategoryList'

interface SideBarProps extends CategoryListProps {
    items: SideBarItem[];
}

interface SideBarItem {
    text: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    iconComponent?: React.FC;
}

const SideBar = ({ items, categories }: SideBarProps) => (
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
            {items.map(({ text, onClick, iconComponent: IconComponent }) => (
                <ListItem
                    button
                    key={text}
                    onClick={onClick}
                >
                    <ListItemIcon>
                        {IconComponent && (
                            <IconComponent />
                        )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <CategoryList categories={categories}/>
    </>
);

export default SideBar;
export type { SideBarProps, SideBarItem };