import type { NextPage } from "next";
import Head from "next/head";
import ProductCards from "../components/ProductCards";
import Layout from "../components/Layout";
import CategoryPicker from "../components/CategoryPicker";

const Categories = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Categories</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <CategoryPicker/>
               <ProductCards />
          </Layout>
     );
};

export default Categories;
