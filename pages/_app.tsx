import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/theme.css";
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
