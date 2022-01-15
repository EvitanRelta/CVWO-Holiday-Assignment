import { BorderColor } from '@mui/icons-material';
import { createTheme, alpha } from '@mui/material/styles';

const customTextFieldOpacities = {
    // Custom opacity types
    defaultOpacity: 0.7,
    defaultTextOpacity: 0.6,
    focusTextOpacity: 0.45, // for better readability

    // Default opacity types in "theme.palette.action"
    activatedOpacity: 0.12,
    disabledOpacity: 0.38,
    focusOpacity: 0.18,      // 0.12,
    hoverOpacity: 0.25,     // 0.04,
    selectedOpacity: 0.08
};

let addBaseTheme = theme => {
    const getContrastColor = alphaVal => alpha(theme.palette.primary.contrastText, alphaVal);

    return createTheme(theme, {
        typography: {
            fontFamily: 'Verdana, sans-serif'
        },
        shape: {
            borderRadius: 10
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& label': {
                            color: getContrastColor(customTextFieldOpacities.defaultTextOpacity),
                        },
                        '& label.Mui-focused': {
                            color: getContrastColor(customTextFieldOpacities.focusTextOpacity),
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: getContrastColor(customTextFieldOpacities.defaultOpacity),
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: getContrastColor(customTextFieldOpacities.defaultOpacity),
                            },
                            '&:hover fieldset': {
                                borderColor: getContrastColor(customTextFieldOpacities.hoverOpacity),
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: getContrastColor(customTextFieldOpacities.focusOpacity),
                            },
                        },
                    }
                }
            }
        }
    })
};

export default addBaseTheme;