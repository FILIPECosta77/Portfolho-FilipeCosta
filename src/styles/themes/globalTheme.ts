import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5AA9E6",
      contrastText: "#FFE45E",
    },
    error: {
      main: "#d42f2f",
      light: "#dc5858",
      dark: "#941f1f",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#599a5d",
      dark: "#205823",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#555",
    },
  },
};
