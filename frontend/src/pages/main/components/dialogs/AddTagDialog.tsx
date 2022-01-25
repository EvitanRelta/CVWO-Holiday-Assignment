import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category, Tag, Task } from '../../../../apiClient/types';
import addTagToTask from '../../../../store/data/thunkActionCreators/addTagToTask';
import { RootState } from '../../../../store/rootReducer';
import DropDownTags from './DropDownTags';


export type AddTagDialogPropsWOIsOpen = {
    task: Task | null;
    onClose: () => void;
};

export type AddTagDialogProps = AddTagDialogPropsWOIsOpen & {
    isOpen: boolean;
};

export default (): JSX.Element => {
    const { isOpen, task, onClose } = useSelector((state: RootState) => state.dialogs.addTagDialogProps);
    const [category, setCategory] = useState<Category | null>(null);
    const [tag, setTag] = useState<Tag | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setCategory(null);
            setTag(null);
        }, 300)
    }, [isOpen])

    const handleSubmission = () => {
        if (!category)
            return setErrorMessage('No category selected.')
        if (!tag)
            return setErrorMessage('No tag selected.')
        if (!task) return;
        dispatch(addTagToTask(task.id, tag.id));
        onClose();
    };

    const errorAlert = errorMessage
        ? <Alert severity='error'>{errorMessage}</Alert>
        : null;

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Add Tag</DialogTitle>
            <DialogContent>
                <DropDownTags
                    categories={task?.categories}
                    category={category}
                    setCategory={setCategory}
                    tag={tag}
                    setTag={setTag}
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