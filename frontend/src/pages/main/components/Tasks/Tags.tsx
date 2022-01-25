import { Chip, Stack } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Tag, Task } from '../../../../apiClient/types';
import removeTagFromTask from '../../../../store/data/thunkActionCreators/removeTagFromTask';
import closeDeleteDialog from '../../../../store/dialogs/basicActionCreators/closeDeleteDialog';
import openDeleteDialog from '../../../../store/dialogs/basicActionCreators/openDeleteDialog';


type TagProps = {
    isSelected: boolean;
    task: Task;
    tags: Tag[];
};

export default ({ isSelected, task, tags }: TagProps) => {
    const dispatch = useDispatch();

    const openTagDeleteDialog = (tag: Tag) => () => {
        dispatch(openDeleteDialog({
            title: 'Remove Tag?',
            description: `Delete "${tag.name}"?`,
            onCancel: closeTagDeleteDialog,
            onDelete: () => {
                closeTagDeleteDialog();
                dispatch(removeTagFromTask(task.id, tag.id));
            }
        }));
    };
    const closeTagDeleteDialog = () => dispatch(closeDeleteDialog());
    return (
        <Stack
            direction='row'
            spacing={1}
        >
            {
                tags.map(tag => (
                    <Chip
                        onDelete={isSelected ? openTagDeleteDialog(tag) : undefined}
                        key={tag.id}
                        label={tag.name}
                        size={isSelected ? 'medium' : 'small'}
                    />
                ))
            }
        </Stack>
    );
};