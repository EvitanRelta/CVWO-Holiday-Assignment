import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import addBaseTheme from './addBaseTheme';

let themeLight = createTheme({
    palette: {
        primary: {
            main: grey[400]
        },
        tonalOffset: 0.2
    }
});

themeLight = createTheme(themeLight, {
    palette: {
        background: {
            default: grey[500],
            paper: grey[50]
        },
    },
});

themeLight = addBaseTheme(themeLight);

export default themeLight;