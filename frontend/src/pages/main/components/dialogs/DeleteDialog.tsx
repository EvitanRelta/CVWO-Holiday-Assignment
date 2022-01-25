import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';


export default () => {
    const { isOpen, type, name, onDelete, onCancel } = useSelector((state: RootState) => state.dialogs.deleteDialogProps);

    return (
        <Dialog open={isOpen} onClose={onCancel}>
            <DialogTitle>Delete {type}?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Delete "{name}"?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}