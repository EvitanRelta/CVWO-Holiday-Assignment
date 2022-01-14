import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

let themeDark = createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        tonalOffset: 0.2
    }
});
themeDark = createTheme(themeDark, {
    palette: {
        background: {
            default: themeDark.palette.primary.dark
        },
    }
});

export default themeDark;