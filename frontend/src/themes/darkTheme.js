import { createTheme } from '@mui/material/styles';
import { blue, orange } from '@mui/material/colors';
import themeBase from './themeBase';
import addStyleOverrides from './addStyleOverrides';
import Lodash from 'lodash';

let darkTheme = createTheme(
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

darkTheme = createTheme(darkTheme, {
    palette: {
        background: {
            paper: '#2b2b2b'
        },
    },
});

darkTheme = addStyleOverrides(darkTheme);

export default darkTheme;