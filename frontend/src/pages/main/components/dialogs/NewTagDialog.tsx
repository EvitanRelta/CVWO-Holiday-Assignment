import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Alert } from '@mui/material';
import createTag from '../../../../store/data/thunkActionCreators/createTag';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import { Category } from '../../../../apiClient/types';
import DropDownCategories from './DropDownCategories';


type NewTagDialogProps = {
    isOpen: boolean;
    onClose: ({}?, reason?: string) => void;
};

export default ({ isOpen, onClose }: NewTagDialogProps): JSX.Element => {
    const [category, setCategory] = useState<Category | null>(null);
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            setCategory(null);
            setName('');
        }, 300)
    }, [isOpen])
    
    const handleSubmission = () => {
        if (!name.trim())
            return setErrorMessage('Name cannot be empty.')
        if (!category)
            return setErrorMessage('No category selected.')
        if (category.tags.find(tag => tag.name === name))
            return setErrorMessage(`Name already taken in "${category.name}".`)
            
        dispatch(createTag(category.id, name));
        
        // Clears fields on submission, else keep it.
        setTimeout(() => {
            setCategory(null);
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
                <DropDownCategories category={category} setCategory={setCategory} />
                <TextField
                    autoFocus
                    margin="dense"
                    id="new-tag-name"
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
                <Button variant='contained' onClick={handleSubmission}>Create</Button>
            </DialogActions>
        </Dialog>
    );
};