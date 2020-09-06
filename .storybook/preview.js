// .storybook/preview.js

import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import React from "react";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
