import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../src/theme';

const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

const parameters ={
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  };

const preview: Preview = {
  decorators,
  parameters,
};

export default preview;
