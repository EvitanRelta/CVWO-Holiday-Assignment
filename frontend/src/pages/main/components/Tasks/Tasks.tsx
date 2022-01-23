import { Divider, Stack, Typography, Chip, Box, Card, CardContent, CardActionArea } from '@mui/material';
import React from 'react';
import { Task } from '../../../../apiClient/types';
import { dateTransformer } from './helperFunctions';
type TasksProps = {
    tasks: Task[];
};

export default ({ tasks }: TasksProps) => (
    <Stack spacing={2}>
        {
            tasks.map(task => (
                <Card
                    key={task.id}
                >
                    <CardActionArea>
                        <CardContent>
                            <Stack spacing={1}>
                                <Typography variant='h5'>{task.title}</Typography>
                                <Divider />
                                {
                                    task.categories.map(category => (
                                        <Box key={category.id}>
                                            <Typography variant='h6'>{category.name}</Typography>
                                            <Stack
                                                direction='row'
                                                spacing={1}
                                            >
                                                {
                                                    category.tags.map(tag => (
                                                        <Chip
                                                            key={tag.id}
                                                            label={tag.name}
                                                        />
                                                    ))
                                                }
                                            </Stack>
                                        </Box>
                                    ))
                                }
                                <Divider />
                                <Typography variant='body1'>{task.description}</Typography>
                                <Divider />
                                <Typography variant='body2'>Last updated: {dateTransformer(task.updated_at)}</Typography>      
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))
        }
    </Stack>
);