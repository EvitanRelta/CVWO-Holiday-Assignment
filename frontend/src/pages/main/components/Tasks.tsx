import { Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Task } from '../../../apiClient/types';

type TasksProps = {
    tasks: Task[];
};

export default ({ tasks }: TasksProps) => (
    <List>
        {
            tasks.map(task => (
                <ListItemButton key={task.id}>
                    <ListItemText>
                        <Typography variant='h5'>{task.title}</Typography>
                        <Divider />
                        <Typography variant='body1'>{task.description}</Typography>
                    </ListItemText>
                </ListItemButton>
            ))
        }
    </List>
);