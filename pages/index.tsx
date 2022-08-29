import Layout from "components/Layout";
import type { NextPage } from "next";

import dynamic from "next/dynamic";
const Home: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import("../components/maps"), {
    ssr: false,
  });

  return (
    <Layout>
      <MapWithNoSSR />
    </Layout>
  );
};

export default Home;
