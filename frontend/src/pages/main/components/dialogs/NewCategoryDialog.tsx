import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Alert } from '@mui/material';
import createCategory from '../../../../store/data/thunkActionCreators/createCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';

type NewCategoryDialogProps = {
    isOpen: boolean;
    onClose: ({}?, reason?: string) => void;
};

export default ({ isOpen, onClose }: NewCategoryDialogProps): JSX.Element => {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    
    const handleSubmission = () => {
        if (!name.trim())
            return setErrorMessage('Name cannot be empty.')
        if (data.categories.find(category => category.name === name))
            return setErrorMessage('Name already taken.')
            
        dispatch(createCategory(name));
        
        // Clears fields on submission, else keep it.
        setTimeout(() => {
            setName('');
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
            <DialogTitle>New Category</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="new-task-title"
                    label="Title"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
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