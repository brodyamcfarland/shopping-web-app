import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import ProductCards from "../components/ProductCards";
import Layout from "../components/Layout";

const Home: NextPage = () => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );

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
