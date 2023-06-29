import { type ThemeOptions, createTheme } from '@mui/material/styles';

const themeDefinition: ThemeOptions = {
  palette: {
    primary: {
      main: '#FF0000',
    },
  }
};

const theme = createTheme(themeDefinition);

export default theme;
