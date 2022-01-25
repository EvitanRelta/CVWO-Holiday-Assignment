import { Delete } from '@mui/icons-material';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from '../../../../apiClient/types';
import deleteCategory from '../../../../store/data/thunkActionCreators/deleteCategory';
import editCategory from '../../../../store/data/thunkActionCreators/editCategory';
import closeDeleteDialog from '../../../../store/dialogs/basicActionCreators/closeDeleteDialog';
import openDeleteDialog from '../../../../store/dialogs/basicActionCreators/openDeleteDialog';

type EditCategoryDialogProps = {
    isOpen: boolean;
    category: Category;
    onClose: ({ }?, reason?: string) => void;
};

export default ({ isOpen, category, onClose }: EditCategoryDialogProps): JSX.Element => {
    const [name, setName] = useState(category.name);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setName(category.name);
        }, 300)
    }, [isOpen]);

    const openCategoryDeleteDialog = () => {
        dispatch(openDeleteDialog({
            type: 'Category',
            name: category.name,
            onCancel: closeCategoryDeleteDialog,
            onDelete: () => {
                closeCategoryDeleteDialog();
                dispatch(deleteCategory(category.id));
                onClose();
            }
        }));
    };
    const closeCategoryDeleteDialog = () => dispatch(closeDeleteDialog());
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
        <>
            <Dialog open={isOpen} onClose={onClose}>
                <DialogTitle>
                    Edit Category
                    <IconButton
                        color='error'
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8
                        }}
                        onClick={openCategoryDeleteDialog}
                    >
                        <Delete />
                    </IconButton>
                </DialogTitle>
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
        </>
    );
};