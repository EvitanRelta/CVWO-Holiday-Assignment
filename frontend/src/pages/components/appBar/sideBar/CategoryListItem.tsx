import React, { useState } from 'react';
import { List, ListItemIcon, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore, AutoAwesomeMotion } from '@mui/icons-material';


interface CategoryListItemProps {
    name: string;
    tagItems: TagItem[];
}

interface TagItem {
    name: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}


const CategoryListItem = ({
    name: categoryName,
    tagItems
}: CategoryListItemProps) => {
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
                <ListItemText primary={categoryName} />
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
                    {tagItems.map(({ name, onClick }) => (
                        <ListItemButton
                            onClick={onClick}
                            sx={{ paddingLeft: 7 }}
                            key={`${categoryName}-${name}`}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CategoryListItem;
export type { CategoryListItemProps };