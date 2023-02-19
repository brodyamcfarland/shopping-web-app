import type { NextPage } from "next";
import Head from "next/head";
import ProductCards from "../components/ProductCards";
import Layout from "../components/Layout";

const Home: NextPage = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Home</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <ProductCards />
          </Layout>
     );
};

export default Home;
