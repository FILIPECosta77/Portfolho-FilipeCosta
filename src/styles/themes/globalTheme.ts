import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      1: "#FAFAFF",
      2: "#30343F",
      3: "#4259B3",
    },
    dark: {
      1: "#30343F",
      2: "#E4D9FF",
    },
  },
});

export default theme;
