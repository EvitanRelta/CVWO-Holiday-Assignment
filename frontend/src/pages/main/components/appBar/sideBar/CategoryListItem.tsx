import React, { useState } from 'react';
import { List, ListItemIcon, ListItemText, Collapse, ListItemButton, IconButton, ListItem } from '@mui/material';
import { ExpandLess, ExpandMore, AutoAwesomeMotion } from '@mui/icons-material';
import { Category } from '../../../../../apiClient/types';
import { Link } from 'react-router-dom';
import EditCategoryDialog from '../../dialogs/EditCategoryDialog';


const CategoryListItem = ({ category }: { category: Category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditCategoryDialogOpen, setIsEditCategoryDialogOpen] = useState(false);
    const toggleExpand = () => setIsOpen(state => !state);

    const expandButton = category.tags.length === 0
        ? null
        : (
            <IconButton
                onClick={toggleExpand}
            >
                {
                    isOpen
                        ? <ExpandLess />
                        : <ExpandMore />
                }
            </IconButton>
        );

    return (
        <>
            <EditCategoryDialog
                isOpen={isEditCategoryDialogOpen}
                category={category}
                onClose={() => setIsEditCategoryDialogOpen(false)}
            />
            <ListItem
                onDoubleClick={() => setIsEditCategoryDialogOpen(true)}
            >
                <ListItemIcon>
                    <AutoAwesomeMotion />
                </ListItemIcon>
                <ListItemText primary={category.name} />
                {expandButton}
            </ListItem>
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