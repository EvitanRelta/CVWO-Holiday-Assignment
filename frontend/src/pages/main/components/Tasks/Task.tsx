import { ArrowBack, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardActionAreaProps, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../../../../apiClient/types';
import deleteTask from '../../../../store/data/thunkActionCreators/deleteTask';
import closeDeleteDialog from '../../../../store/dialogs/basicActionCreators/closeDeleteDialog';
import openDeleteDialog from '../../../../store/dialogs/basicActionCreators/openDeleteDialog';
import EditTaskDialog from '../dialogs/EditTaskDialog';
import Categories from './Categories';
import { dateTransformer } from './helperFunctions';

type TaskProps = {
    task: Task;
    isSelected: boolean;
    onClickTask: CardActionAreaProps['onClick'];
    onUnselect: () => void;
};

export default ({ task, onClickTask, isSelected, onUnselect }: TaskProps) => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [cardIsActive, setCardIsActive] = useState(true);
    const dispatch = useDispatch();

    const openTaskDeleteDialog = () => {
        dispatch(openDeleteDialog({
            type: 'Task',
            name: task.title,
            onCancel: closeTaskDeleteDialog,
            onDelete: () => {
                closeTaskDeleteDialog();
                setCardIsActive(false);
                dispatch(deleteTask(task.id));
            }
        }))
    }
    const closeTaskDeleteDialog = () => dispatch(closeDeleteDialog());

    const closeTaskIcon = (
        <IconButton onClick={onUnselect}>
            <ArrowBack />
        </IconButton>
    );
    const header = (
        <CardHeader
            titleTypographyProps={{ variant: 'h6' }}
            subheaderTypographyProps={{ variant: 'body2' }}
            action={isSelected ? closeTaskIcon : null}
            title={task.title}
            subheader={dateTransformer(task.updated_at)}
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
                    onClick={openTaskDeleteDialog}
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
            <CardContent
                sx={{
                    paddingTop: 0,
                    marginTop: -2
                }}
            >
                <Categories isSelected={isSelected} categories={task.categories} task={task} />
                {description}
            </CardContent>
        );

    return (
        <Collapse timeout={200} in={cardIsActive} unmountOnExit>
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