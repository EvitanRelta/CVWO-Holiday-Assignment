import { DialogDispatchTypes, DIALOGS_CLOSE_DELETE_DIALOG, DIALOGS_OPEN_DELETE_DIALOG } from './actionTypes';

export type DeleteDialogPropsWOIsOpen = {
    type: string;
    name: string;
    onDelete: () => void;
    onCancel: () => void;
};

type DialogsState = {
    deleteDialogProps: DeleteDialogPropsWOIsOpen & {
        isOpen: boolean;
    }
};

const initialState: DialogsState = {
    deleteDialogProps: {
        isOpen: false,
        type: '',
        name: '',
        onDelete: () => undefined,
        onCancel: () => undefined
    }
};

const dialogsReducer = (state: DialogsState = initialState, action: DialogDispatchTypes): DialogsState => {
    switch (action.type) {
        case DIALOGS_OPEN_DELETE_DIALOG:
            return {
                ...state,
                deleteDialogProps: {
                    ...action.payload,
                    isOpen: true
                }
            };
        case DIALOGS_CLOSE_DELETE_DIALOG:
            return {
                ...state,
                deleteDialogProps: {
                    ...state.deleteDialogProps,
                    isOpen: false
                }
            };
        default:
            return state;
    }
};

export default dialogsReducer;