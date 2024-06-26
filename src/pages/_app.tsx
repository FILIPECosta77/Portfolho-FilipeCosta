import theme from "@/styles/themes/globalTheme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { MyProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </ChakraProvider>
  );
}
