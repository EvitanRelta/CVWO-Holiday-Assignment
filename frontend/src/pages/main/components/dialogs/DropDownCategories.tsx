import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Category } from '../../../../apiClient/types';
import { RootState } from '../../../../store/rootReducer';


type DropDownCategoriesProps = {
    category: Category | null;
    setCategory: React.Dispatch<React.SetStateAction<Category | null>>;
};

export default ({ category, setCategory }: DropDownCategoriesProps) => {
    const data = useSelector((state: RootState) => state.data);
    
    return (
        <FormControl fullWidth>
            <InputLabel id='select-category-label'>Category</InputLabel>
            <Select
                labelId='select-category-label'
                id='select-category'
                value={category ? category.id : ''}
                label='Category'    
                onChange={e => {
                    const selectedCategory = data.categories.find(category => category.id === Number(e.target.value)) || null;
                    setCategory(selectedCategory);
                }}
            >
                {
                    data.categories.map(category => (
                        <MenuItem 
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};