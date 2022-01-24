import { Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Task } from '../../../../apiClient/types';
import TaskComponent from './Task';


export default ({ tasks }: { tasks: Task[] }) => {
    const [selectedId, setSelectedId] = useState(-1);

    const onClickTask = (taskId: number) => () => setSelectedId(taskId);

    return (
        <Grid container spacing={2}>
            {
                tasks.map(task => (
                    <Grid item key={task.id} xs={12} md={6} lg={4} xl={3}>
                        <TaskComponent
                            task={task}
                            isSelected={task.id === selectedId}
                            onClickTask={onClickTask(task.id)}
                            onUnselect={() => setSelectedId(-1)}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}