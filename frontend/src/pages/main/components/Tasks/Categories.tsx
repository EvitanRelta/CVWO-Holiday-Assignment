import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Category } from '../../../../apiClient/types';
import Tags from './Tags';


export default ({ categories }: { categories: Category[]}) => categories.length === 0
    ? <></>
    : (
        <>
            <Divider />
            {
                categories.map(category => (
                    <Stack key={category.id} spacing={0.2}>
                        <Typography sx={{ textDecoration: 'underline' }}>{category.name}</Typography>
                        <Tags tags={category.tags} />
                    </Stack>
                ))
            }
        </>
    );