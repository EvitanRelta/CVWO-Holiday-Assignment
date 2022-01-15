import { createTheme } from '@mui/material/styles';
import { grey, blue, orange } from '@mui/material/colors';
import themeBase from './themeBase';
import addStyleOverrides from './addStyleOverrides';
import Lodash from 'lodash';

let themeDark = createTheme(
    Lodash.merge(themeBase, {
        palette: {
            mode: 'dark',
            primary: {
                main: orange[600]   // '#4f4f4f'
            },
            secondary: {
                main: blue[400]
            },
            tonalOffset: 0.2
        }
    })
);

themeDark = createTheme(themeDark, {
    palette: {
        background: {
            paper: '#2b2b2b'
        },
    },
});

themeDark = addStyleOverrides(themeDark);

export default themeDark;