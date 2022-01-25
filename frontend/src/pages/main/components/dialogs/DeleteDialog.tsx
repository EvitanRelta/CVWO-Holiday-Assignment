import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';


type DeleteDialogProps = {
    isOpen: boolean;
    type: string;
    name: string;
    onDelete: () => void;
    onCancel: () => void;
};

export default ({ isOpen, type, name, onDelete, onCancel }: DeleteDialogProps) => (
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