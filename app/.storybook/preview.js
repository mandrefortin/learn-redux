import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
