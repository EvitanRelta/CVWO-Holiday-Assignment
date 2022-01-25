import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Alert } from '@mui/material';
import editCategory from '../../../../store/data/thunkActionCreators/editCategory';
import { useDispatch } from 'react-redux';
import { Category } from '../../../../apiClient/types';

type EditCategoryDialogProps = {
    isOpen: boolean;
    category: Category;
    onClose: ({}?, reason?: string) => void;
};

export default ({ isOpen, category, onClose }: EditCategoryDialogProps): JSX.Element => {
    const [name, setName] = useState(category.name);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setName(category.name);
        }, 300)
    }, [isOpen])

    const handleSubmission = () => {
        if (!name.trim())
            return setErrorMessage('Name cannot be empty.')
        dispatch(editCategory(category.id, name));
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
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="edit-category-name"
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
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