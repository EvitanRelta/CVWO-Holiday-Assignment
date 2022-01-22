import React from 'react';
import { List } from '@mui/material';
import CategoryListItem, { CategoryListItemProps } from './CategoryListItem'

interface CategoryListProps {
    categories: CategoryListItemProps[]
};

const CategoryList = ({ categories }: CategoryListProps) => (
    <List>
        {categories.map(props =>
            <CategoryListItem 
                key={props.name}
                {...props} 
            />
        )}
    </List>
);

export default CategoryList;
export type { CategoryListProps };