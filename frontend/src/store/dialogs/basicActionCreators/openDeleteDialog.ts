
import { DialogsOpenDeleteDialog, DIALOGS_OPEN_DELETE_DIALOG } from '../actionTypes';
import { DeleteDialogPropsWOIsOpen } from '../dialogsReducer';


export default (deleteDialogProps: DeleteDialogPropsWOIsOpen): DialogsOpenDeleteDialog => ({
    type: DIALOGS_OPEN_DELETE_DIALOG,
    payload: deleteDialogProps
});