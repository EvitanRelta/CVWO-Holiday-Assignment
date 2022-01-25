import { DeleteDialogPropsWOIsOpen } from './dialogsReducer';

export const DIALOGS_OPEN_DELETE_DIALOG = 'dialog/openDeleteDialog';
export const DIALOGS_CLOSE_DELETE_DIALOG = 'dialog/closeDeleteDialog';

export type DialogsOpenDeleteDialog = {
    type: typeof DIALOGS_OPEN_DELETE_DIALOG;
    payload: DeleteDialogPropsWOIsOpen
};
export type DialogsCloseDeleteDialog = {
    type: typeof DIALOGS_CLOSE_DELETE_DIALOG;
};

export type DialogDispatchTypes = DialogsOpenDeleteDialog | DialogsCloseDeleteDialog;
