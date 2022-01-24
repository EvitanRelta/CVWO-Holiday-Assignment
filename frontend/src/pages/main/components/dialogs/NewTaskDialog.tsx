import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Alert } from '@mui/material';
import createTask from '../../../../store/data/thunkActionCreators/createTask';
import { useDispatch } from 'react-redux';

type NewTaskDialogProps = {
    isOpen: boolean;
    onClose: ({}?, reason?: string) => void;
};

export default ({ isOpen, onClose }: NewTaskDialogProps): JSX.Element => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmission = () => {
        if (!title.trim())
            return setErrorMessage('Title cannot be empty.')
        dispatch(createTask(title, description));
        
        // Clears fields on submission, else keep it.
        setTimeout(() => {
            setTitle('');
            setDescription('');
        }, 300)
        
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
            <DialogTitle>New Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="new-task-title"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    margin="dense"
                    id="new-task-description"
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
                <Button variant='contained' onClick={handleSubmission}>Create</Button>
            </DialogActions>
        </Dialog>
    );
};