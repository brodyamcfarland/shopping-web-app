import type { GetServerSideProps } from "next";
import Head from "next/head";
import ProductCards from "../components/ProductCards";
import Layout from "../components/Layout";
import { ProductQuery } from "../types";

const Home = ({ products }: ProductQuery) => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Home</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <ProductCards products={products} />
          </Layout>
     );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
     const products = await fetch("https://fakestoreapi.com/products").then(
          (res) => res.json()
     );

     return {
          props: {
               products,
          },
     };
};
