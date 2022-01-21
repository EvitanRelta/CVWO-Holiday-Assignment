import { PaletteColor, ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        google: Palette['primary'];
        hyperlink: Palette['primary'] & {
            disabled?: string;
        }
    }
    interface PaletteOptions {
        google: PaletteOptions['primary'];
        hyperlink: PaletteOptions['primary'] & {
            disabled?: string;
        }
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        google: true;
    }
}

const themeBase: ThemeOptions = {
    palette: {
        google: {
            main: '#1a73e8',
            contrastText: 'white'
        },
        hyperlink: {},
        tonalOffset: 0.2
    },
    typography: {
        fontFamily: 'Verdana, sans-serif'
    },
    shape: {
        borderRadius: 10
    }
};

export default themeBase;