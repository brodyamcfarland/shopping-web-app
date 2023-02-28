import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CategoryPicker from "../components/CategoryPicker";
import { ProductQuery } from ".";

const Categories = ({ products }: ProductQuery) => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Categories</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <CategoryPicker />
          </Layout>
     );
};

export default Categories;
