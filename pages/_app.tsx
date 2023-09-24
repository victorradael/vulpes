import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/theme.css";
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
