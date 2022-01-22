import { Alert, Typography } from '@mui/material';
import React from 'react';

export type ErrorAlertProps = {
    text: string;
}

export default ({ text }: ErrorAlertProps): JSX.Element => (
    <Alert severity="error">
        {text
            ? text.split('\n').map(lineText => (
                <Typography>{lineText}</Typography>
            ))
            : null
        }
    </Alert>
);