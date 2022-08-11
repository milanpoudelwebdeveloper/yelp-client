import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
