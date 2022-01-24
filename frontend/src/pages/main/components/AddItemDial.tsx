import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Backdrop } from '@mui/material';
import React, { useState } from 'react';
import { LocalOffer, AutoAwesomeMotion, Task } from '@mui/icons-material';
import NewTaskDialog from './dialogs/NewTaskDialog';

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
    const [newTaskIsOpen, setNewTaskIsOpen] = useState(false);
    
    return (
        <Box
            sx={{
                flexGrow: 1
            }}
        >
            <Backdrop open={isOpen} onClick={() => setIsOpen(false)} />
            <NewTaskDialog isOpen={newTaskIsOpen} onClose={() => setNewTaskIsOpen(false)} />
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
                    onClick={() => setNewTaskIsOpen(true)}
                />
                <SpeedDialAction
                    FabProps={makeSpeedDialActionBigger}
                    icon={<AutoAwesomeMotion />}
                    tooltipTitle='New Category'
                    tooltipOpen
                />
                <SpeedDialAction
                    FabProps={makeSpeedDialActionBigger}
                    icon={<LocalOffer />}
                    tooltipTitle='New Tag'
                    tooltipOpen
                />
            </SpeedDial>
        </Box>
    );
};  