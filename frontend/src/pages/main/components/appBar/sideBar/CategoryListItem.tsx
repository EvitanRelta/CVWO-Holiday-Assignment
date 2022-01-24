import React, { useState } from 'react';
import { List, ListItemIcon, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore, AutoAwesomeMotion } from '@mui/icons-material';
import { Category } from '../../../../../apiClient/types';
import { Link } from 'react-router-dom';


const CategoryListItem = ({ category }: { category: Category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpand = () => setIsOpen(state => !state);

    return (
        <>
            <ListItemButton
                onClick={toggleExpand}
            >
                <ListItemIcon>
                    <AutoAwesomeMotion />
                </ListItemIcon>
                <ListItemText primary={category.name} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        backgroundColor: 'background.nestedSideBarItem'
                    }}
                >
                    {category.tags.map(tag => (
                        <ListItemButton
                            component={Link}
                            sx={{ paddingLeft: 7 }}
                            key={`${category.name}-${tag.name}`}
                            to={`../tag/${tag.id}`}
                        >
                            <ListItemText primary={tag.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CategoryListItem;