import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

let themeLight = createTheme({
    palette: {
        primary: {
            main: grey[50]
        },
        tonalOffset: 0.2
    }
});
themeLight = createTheme(themeLight, {
    palette: {
        background: {
            default: themeLight.palette.primary.dark
        },
    }
});

export default themeLight;