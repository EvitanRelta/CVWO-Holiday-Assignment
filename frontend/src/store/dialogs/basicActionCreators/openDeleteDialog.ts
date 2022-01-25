
import { DeleteDialogPropsWOIsOpen } from '../../../pages/main/components/dialogs/DeleteDialog';
import { DialogsOpenDeleteDialog, DIALOGS_OPEN_DELETE_DIALOG } from '../actionTypes';


export default (deleteDialogProps: DeleteDialogPropsWOIsOpen): DialogsOpenDeleteDialog => ({
    type: DIALOGS_OPEN_DELETE_DIALOG,
    payload: deleteDialogProps
});