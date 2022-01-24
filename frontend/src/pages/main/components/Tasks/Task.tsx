import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Stack, Typography, Divider, Chip, Box, CardActionAreaProps, CardHeader, IconButton, Collapse, CardActions, Button, Container } from '@mui/material';
import { Task } from '../../../../apiClient/types';
import Categories from './Categories';
import { dateTransformer } from './helperFunctions';
import { Close, Edit, Delete } from '@mui/icons-material';
import DeleteDialog from '../dialogs/DeleteDialog';
import { useDispatch } from 'react-redux';
import deleteTask from '../../../../store/data/thunkActionCreators/deleteTask';
import EditTaskDialog from '../dialogs/EditTaskDialog';

type TaskProps = {
    task: Task;
    isSelected: boolean;
    onClickTask: CardActionAreaProps['onClick'];
    onUnselect: () => void;
};

export default ({ task, onClickTask, isSelected, onUnselect }: TaskProps) => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [cardIsActive, setCardIsActive] = useState(true);
    const dispatch = useDispatch();
    
    const closeTaskIcon = (
        <IconButton onClick={onUnselect}>
            <Close />
        </IconButton>
    );
    const header = (
        <CardHeader
            titleTypographyProps={{ variant: 'h6' }}
            subheaderTypographyProps={{ variant: 'body2' }}
            action={isSelected ? closeTaskIcon : null}
            title={task.title}
            subheader={dateTransformer(task.updated_at)}
            sx={{ paddingBottom: 0, marginBottom: -1 }}
        />
    );
    const actionsFooter = (
        <Collapse in={isSelected} unmountOnExit>
            <CardActions  >
                <Button
                    size='small'
                    variant='contained'
                    startIcon={<Edit />}
                    onClick={() => setIsEditDialogOpen(true)}
                >
                    Edit
                </Button>
                <Button
                    size='small'
                    variant='contained'
                    startIcon={<Delete />}
                    onClick={() => setIsDeleteDialogOpen(true)}
                >
                    Delete
                </Button>
            </CardActions>
        </Collapse>
    );
    const description = !task.description
        ? null
        : (
            <>
                <Divider sx={{ marginY: 1 }} />
                <Typography variant='body2'>{task.description}</Typography>
            </>
        );
    const body = !task.description && task.categories.length === 0
    ? null
    : (
        <CardContent>
            <Categories isSelected={isSelected} categories={task.categories} />
            {description}
        </CardContent>
    );

    return (
        <Collapse timeout={200} in={cardIsActive} unmountOnExit>
            <DeleteDialog
                name={task.title}
                isOpen={isDeleteDialogOpen}
                onCancel={() => setIsDeleteDialogOpen(false)}
                onDelete={() => {
                    setIsDeleteDialogOpen(false);
                    setCardIsActive(false);
                    dispatch(deleteTask(task.id));
                }}
            />
            <EditTaskDialog
                isOpen={isEditDialogOpen}
                task={task}
                onClose={() => setIsEditDialogOpen(false)}
            />
            <Card>
                <Box
                    component={!isSelected ? CardActionArea : 'div'}
                    onClick={!isSelected ? onClickTask : undefined}
                    onDoubleClick={() => setIsEditDialogOpen(true)}
                >
                    {header}
                    {body}
                </Box>
                {actionsFooter}
            </Card>
        </Collapse>
    );
};