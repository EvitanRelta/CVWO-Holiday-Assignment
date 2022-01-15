import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import addBaseTheme from './addBaseTheme';

let themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4f4f4f'
        },
        tonalOffset: 0.2
    }
});

themeDark = createTheme(themeDark, {
    palette: {
        background: {
            paper: '#2b2b2b'
        },
    },
});

themeDark = addBaseTheme(themeDark);

export default themeDark;