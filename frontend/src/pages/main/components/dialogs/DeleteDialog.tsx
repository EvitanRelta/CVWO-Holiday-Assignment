import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';


type DeleteDialogProps = {
    isOpen: boolean;
    name: string;
    onDelete: () => void;
    onCancel: () => void;
};

export default ({ isOpen, name, onDelete, onCancel }: DeleteDialogProps) => (
    <Dialog open={isOpen}>
        <DialogTitle>Confirm Delete</DialogTitle>
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