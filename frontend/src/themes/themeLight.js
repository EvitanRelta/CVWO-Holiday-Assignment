import { createTheme } from '@mui/material/styles';
import { grey, blue, orange } from '@mui/material/colors';
import themeBase from './themeBase';
import addStyleOverrides from './addStyleOverrides';
import Lodash from 'lodash';

let themeLight = createTheme(
    Lodash.merge(themeBase, {
        palette: {
            primary: {
                main: orange[400]   //grey[400]
            },
            secondary: {
                main: blue[600]
            },
            tonalOffset: 0.2
        }
    })
);

themeLight = createTheme(themeLight, {
    palette: {
        background: {
            default: grey[500],
            paper: grey[50]
        },
    },
});

themeLight = addStyleOverrides(themeLight);

export default themeLight;