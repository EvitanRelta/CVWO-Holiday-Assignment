import { AddCircle } from '@mui/icons-material';
import { Chip, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Category, Task } from '../../../../apiClient/types';
import closeAddTagDialog from '../../../../store/dialogs/basicActionCreators/closeAddTagDialog';
import openAddTagDialog from '../../../../store/dialogs/basicActionCreators/openAddTagDialog';
import Tags from './Tags';


type CategoriesProps = {
    task: Task;
    isSelected: boolean;
    categories: Category[];
};

export default ({ task, isSelected, categories }: CategoriesProps) => {
    const dispatch = useDispatch();


    const openTaskAddTagDialog = () => {
        dispatch(openAddTagDialog({
            onClose: closeTaskAddTagDialog,
            task
        }));
    };
    const closeTaskAddTagDialog = () => dispatch(closeAddTagDialog());

    return categories.length === 0 && !isSelected
        ? <></>
        : (
            <>
                <Divider sx={{ marginY: 1 }} />
                <Grid container spacing={0}>
                    {
                        categories.map(category => (
                            <Grid item key={category.id} xs='auto' sx={{ marginRight: 3 }}>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        marginBottom: 1,
                                        textDecoration: 'underline'
                                    }}
                                >
                                    {category.name}
                                </Typography>
                                <Tags tags={category.tags} />
                            </Grid>
                        ))
                    }
                    {
                        isSelected
                            ? (
                                <Grid item xs='auto' sx={{ marginRight: 3 }}>
                                    <Chip
                                        label='Add tag'
                                        deleteIcon={<AddCircle />}
                                        onClick={openTaskAddTagDialog}
                                        onDelete={openTaskAddTagDialog}
                                    />
                                </Grid>
                            )
                            : null
                    }
                </Grid>
            </>
        );
};