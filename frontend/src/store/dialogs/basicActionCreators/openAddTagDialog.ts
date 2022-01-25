
import { AddTagDialogPropsWOIsOpen } from '../../../pages/main/components/dialogs/AddTagDialog';
import { DialogsOpenAddTag, DIALOGS_OPEN_ADD_TAG } from '../actionTypes';


export default (addTagDialogProps: AddTagDialogPropsWOIsOpen): DialogsOpenAddTag => ({
    type: DIALOGS_OPEN_ADD_TAG,
    payload: addTagDialogProps
});