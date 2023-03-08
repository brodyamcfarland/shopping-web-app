import type { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CategoryPicker from "../components/CategoryPicker";
import { ProductQuery } from "../types";

const Categories = ({ products }: ProductQuery) => {
     return (
          <Layout>
               <Head>
                    <title>Get: Categories</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <CategoryPicker products={products} />
          </Layout>
     );
};

export default Categories;

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
