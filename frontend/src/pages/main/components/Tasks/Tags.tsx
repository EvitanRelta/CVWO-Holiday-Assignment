import { Stack, Chip } from '@mui/material';
import React from 'react';
import { Tag } from '../../../../apiClient/types';


export default ({ tags }: { tags: Tag[]}) => (
    <Stack
        direction='row'
        spacing={1}
    >
        {
            tags.map(tag => (
                <Chip
                    key={tag.id}
                    label={tag.name}
                    size='small'
                />
            ))
        }
    </Stack>
);