import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Popper, Backdrop } from '@mui/material';
import React, { useState } from 'react';
import { LocalOffer, AutoAwesomeMotion, Task } from '@mui/icons-material';


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
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <Popper open>
            <Box
                sx={{
                    flexGrow: 1
                }}
            >
                <Backdrop open={isOpen} />
                <SpeedDial
                    ariaLabel="Add Item"
                    // open={isOpen}
                    sx={{
                        position: 'fixed',
                        bottom: '3vh',
                        right: '3vh',
                    }}
                    FabProps={makeSpeedDialBigger}
                    icon={<SpeedDialIcon sx={{ transform:{ sm:`scale(${80/56})` } }} />}
                    onOpen={handleOpen}
                    onClose={handleClose}
                >
                    <SpeedDialAction
                        FabProps={makeSpeedDialActionBigger}
                        icon={<Task />}
                        tooltipTitle='New Task'
                        tooltipOpen
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
        </Popper>
    );
};  