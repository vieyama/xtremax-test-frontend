import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
