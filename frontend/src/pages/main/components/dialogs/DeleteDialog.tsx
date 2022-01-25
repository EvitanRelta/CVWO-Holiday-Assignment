import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';

export type DeleteDialogPropsWOIsOpen = {
    title: string;
    description: string;
    onDelete: () => void;
    onCancel: () => void;
};

export type DeleteDialogProps = DeleteDialogPropsWOIsOpen & {
    isOpen: boolean;
};

export default () => {
    const { isOpen, title, description, onDelete, onCancel } = useSelector((state: RootState) => state.dialogs.deleteDialogProps);

    return (
        <Dialog open={isOpen} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}