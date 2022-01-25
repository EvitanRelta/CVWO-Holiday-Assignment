import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Backdrop } from '@mui/material';
import React, { useState } from 'react';
import { LocalOffer, AutoAwesomeMotion, Task } from '@mui/icons-material';
import NewTaskDialog from './dialogs/NewTaskDialog';
import NewCategoryDialog from './dialogs/NewCategoryDialog';
import NewTagDialog from './dialogs/NewTagDialog';

const makeSpeedDialBigger = {
    sx: {
        height: { xs: 56, sm: 80 },
        width: { xs: 56, sm: 80 }
    }
};
const makeSpeedDialActionBigger = {
    sx: {
        height: { xs: 48, sm: 64 },
        width: { xs: 48, sm: 64 }
    }
};

export default () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);
    const [isNewCategoryDialogOpen, setIsNewCategoryDialogOpen] = useState(false);
    const [isNewTagDialogOpen, setIsNewTagDialogOpen] = useState(false);
    
    
    return (
        <Box
            sx={{
                flexGrow: 1
            }}
        >
            <Backdrop open={isOpen} onClick={() => setIsOpen(false)} />
            <NewTaskDialog isOpen={isNewTaskDialogOpen} onClose={() => setIsNewTaskDialogOpen(false)} />
            <NewCategoryDialog isOpen={isNewCategoryDialogOpen} onClose={() => setIsNewCategoryDialogOpen(false)} />
            <NewTagDialog isOpen={isNewTagDialogOpen} onClose={() => setIsNewTagDialogOpen(false)} />
            <SpeedDial
                open={isOpen}
                ariaLabel="Add Item"
                // open={isOpen}
                sx={{
                    position: 'fixed',
                    bottom: '3vh',
                    right: '3vh',
                }}
                FabProps={makeSpeedDialBigger}
                icon={<SpeedDialIcon sx={{ transform:{ sm:`scale(${80/56})` } }} />}
                onClick={() => setIsOpen(state => !state)}
            >
                <SpeedDialAction
                    FabProps={makeSpeedDialActionBigger}
                    icon={<Task />}
                    tooltipTitle='New Task'
                    tooltipOpen
                    onClick={() => setIsNewTaskDialogOpen(true)}
                />
                <SpeedDialAction
                    FabProps={makeSpeedDialActionBigger}
                    icon={<AutoAwesomeMotion />}
                    tooltipTitle='New Category'
                    tooltipOpen
                    onClick={() => setIsNewCategoryDialogOpen(true)}
                />
                <SpeedDialAction
                    FabProps={makeSpeedDialActionBigger}
                    icon={<LocalOffer />}
                    tooltipTitle='New Tag'
                    tooltipOpen
                    onClick={() => setIsNewTagDialogOpen(true)}
                />
            </SpeedDial>
        </Box>
    );
};  