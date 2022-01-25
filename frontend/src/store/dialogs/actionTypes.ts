import { AddTagDialogPropsWOIsOpen } from '../../pages/main/components/dialogs/AddTagDialog';
import { DeleteDialogPropsWOIsOpen } from '../../pages/main/components/dialogs/DeleteDialog';

export const DIALOGS_OPEN_DELETE_DIALOG = 'dialog/openDeleteDialog';
export const DIALOGS_CLOSE_DELETE_DIALOG = 'dialog/closeDeleteDialog';
export const DIALOGS_OPEN_ADD_TAG = 'dialog/openAddTag';
export const DIALOGS_CLOSE_ADD_TAG = 'dialog/closeAddTag';

export type DialogsOpenDeleteDialog = {
    type: typeof DIALOGS_OPEN_DELETE_DIALOG;
    payload: DeleteDialogPropsWOIsOpen
};
export type DialogsCloseDeleteDialog = {
    type: typeof DIALOGS_CLOSE_DELETE_DIALOG;
};
export type DialogsOpenAddTag = {
    type: typeof DIALOGS_OPEN_ADD_TAG;
    payload: AddTagDialogPropsWOIsOpen
};
export type DialogsCloseAddTag = {
    type: typeof DIALOGS_CLOSE_ADD_TAG;
};

export type DialogDispatchTypes = DialogsOpenDeleteDialog | DialogsCloseDeleteDialog
    | DialogsOpenAddTag | DialogsCloseAddTag;