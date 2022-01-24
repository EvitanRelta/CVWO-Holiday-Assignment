import { Divider, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Category } from '../../../../apiClient/types';
import Tags from './Tags';
import { AddCircle } from '@mui/icons-material';


type CategoriesProps = {
    isSelected: boolean;
    categories: Category[];
};

export default ({ isSelected, categories }: CategoriesProps) => categories.length === 0
    ? <></>
    : (
        <>
            <Divider />
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
                                <IconButton>
                                    <AddCircle fontSize='large' />
                                </IconButton>
                            </Grid>
                        )
                        : null
                }
            </Grid>
        </>
    );