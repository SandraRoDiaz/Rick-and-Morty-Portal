import type { NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rick & Morty App</title>
        <meta
          name="Rick and Morty App"
          content="Rick and Morty App for finding character by different filters"
        />
        <link rel="icon" href="/pickle-rick.png" />
      </Head>

      <Filter />
    </div>
  );
};

export default Home;
