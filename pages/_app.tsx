import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../styles/globals.css";
import { RestaurantContextProvider } from "../context/restaurantsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RestaurantContextProvider>
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
    </RestaurantContextProvider>
  );
}

export default MyApp;
