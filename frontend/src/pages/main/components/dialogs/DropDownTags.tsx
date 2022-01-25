import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Lodash from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Category, Tag } from '../../../../apiClient/types';
import { RootState } from '../../../../store/rootReducer';


type DropDownTagsProps = {
    categories?: Category[];
    category: Category | null;
    setCategory: React.Dispatch<React.SetStateAction<Category | null>>;
    tag: Tag | null;
    setTag: React.Dispatch<React.SetStateAction<Tag | null>>;
};

export default ({ categories, category, setCategory, tag, setTag }: DropDownTagsProps) => {
    const data = useSelector((state: RootState) => state.data);

    const isNotTaggedYet = (tag: Tag) => categories && !Boolean(Lodash.find(categories, { tags: [{ id: tag.id }] }));

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='select-tagging-category-label'>Category</InputLabel>
                <Select
                    labelId='select-tagging-category-label'
                    id='select-tagging-category'
                    value={category ? category.id : ''}
                    label='Category'
                    onChange={e => {
                        const selectedCategory = data.categories.find(category => category.id === Number(e.target.value)) || null;
                        setCategory(selectedCategory);
                        setTag(null);
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
            <FormControl fullWidth>
                <InputLabel id='select-tagging-tag-label'>Category</InputLabel>
                <Select
                    labelId='select-tagging-tag-label'
                    id='select-tagging-tag'
                    value={tag ? tag.id : ''}
                    label='Tag'
                    onChange={e => {
                        const selectedTag = category?.tags.find(tag => tag.id === Number(e.target.value)) || null;
                        setTag(selectedTag);
                    }}
                >
                    {
                        !category
                            ? null
                            : category.tags
                                .filter(isNotTaggedYet)
                                .map(tag => (
                                    <MenuItem
                                        key={tag.id}
                                        value={tag.id}
                                    >
                                        {tag.name}
                                    </MenuItem>
                                ))
                    }
                </Select>
            </FormControl>
        </>
    );
};