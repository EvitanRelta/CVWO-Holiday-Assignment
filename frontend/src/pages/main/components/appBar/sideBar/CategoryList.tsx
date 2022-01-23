import React from 'react';
import { List } from '@mui/material';
import CategoryListItem from './CategoryListItem'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/rootReducer';

const CategoryList = () => {
    const data = useSelector((state: RootState) => state.data);

    return (
        <List>
            {data.categories.map(category =>
                <CategoryListItem category={category} />
            )}
        </List>
    );
}

export default CategoryList;