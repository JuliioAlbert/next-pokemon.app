import "../styles/globals.css";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  darkTheme;
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
