import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { Task } from '../../../../apiClient/types';
import TaskComponent from './Task';


export default ({ tasks }: { tasks: Task[] }) => {
    const [selectedId, setSelectedId] = useState(-1);

    const onClickTask = (taskId: number) => () => setSelectedId(taskId);

    return (
        <Stack spacing={2}>
            {
                tasks.map(task => (
                    <TaskComponent
                        key={task.id}
                        task={task}
                        isSelected={task.id === selectedId}
                        onClickTask={onClickTask(task.id)}
                        onUnselect={() => setSelectedId(-1)}
                    />
                ))
            }
        </Stack>
    );
}