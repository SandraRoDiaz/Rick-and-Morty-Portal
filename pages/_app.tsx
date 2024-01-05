import Layout from "../components/Layout";
import CharacterProvider from "../contexts/CharacterProvider";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CharacterProvider>
        <Component {...pageProps} />
      </CharacterProvider>
    </Layout>
  );
}

export default MyApp;
