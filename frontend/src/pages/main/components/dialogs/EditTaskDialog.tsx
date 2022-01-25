import { Delete } from '@mui/icons-material';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../../../../apiClient/types';
import deleteTask from '../../../../store/data/thunkActionCreators/deleteTask';
import editTask from '../../../../store/data/thunkActionCreators/editTask';
import closeDeleteDialog from '../../../../store/dialogs/basicActionCreators/closeDeleteDialog';
import openDeleteDialog from '../../../../store/dialogs/basicActionCreators/openDeleteDialog';

type EditTaskDialogProps = {
    isOpen: boolean;
    task: Task;
    onClose: ({ }?, reason?: string) => void;
};

export default ({ isOpen, task, onClose }: EditTaskDialogProps): JSX.Element => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setTitle(task.title);
            setDescription(task.description);
        }, 300)
    }, [isOpen]);

    const openTaskDeleteDialog = () => {
        dispatch(openDeleteDialog({
            title: 'Delete Task?',
            description: `Delete "${task.title}"?`,
            onCancel: closeTaskDeleteDialog,
            onDelete: () => {
                closeTaskDeleteDialog();
                dispatch(deleteTask(task.id));
                onClose();
            }
        }));
    };
    const closeTaskDeleteDialog = () => dispatch(closeDeleteDialog());
    const handleSubmission = () => {
        if (!title.trim())
            return setErrorMessage('Title cannot be empty.')
        dispatch(editTask(task.id, { title, description }));
        onClose();
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        setErrorMessage('');
        if (e.key === 'Enter')
            handleSubmission();
    };

    const errorAlert = errorMessage
        ? <Alert severity='error'>{errorMessage}</Alert>
        : null;

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>
                Edit Task
                <IconButton
                    color='error'
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                    onClick={openTaskDeleteDialog}
                >
                    <Delete />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="edit-task-title"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    margin="dense"
                    id="edit-task-description"
                    label="Description"
                    fullWidth
                    multiline
                    minRows={3}
                    maxRows={10}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {errorAlert}
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={onClose}>Cancel</Button>
                <Button variant='contained' onClick={handleSubmission}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};