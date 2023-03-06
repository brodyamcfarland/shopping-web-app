import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import { ProductQuery } from "../types";
import SaleFeed from "../components/SaleFeed";

const Sale = ({ products }: ProductQuery) => {
     console.log(products);
     return (
          <Layout>
               <Head>
                    <title>Shopping: Deals</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
                    <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#171717] max-w-4xl rounded-md">
                         <h2 className="py-2 border-b border-gray-600 font-bold">
                              Sales
                         </h2>
                         <Image
                              src="/SALE_BANNER.png"
                              height={1000}
                              width={4000}
                              alt="Logo"
                              title="Home"
                              className="object-contain w-full h-[8rem] bg-black border-b border-gray-600"
                              unoptimized
                              priority
                         />
                         <div className="">
                              <SaleFeed products={products} />
                         </div>
                    </div>
               </div>
          </Layout>
     );
};

export default Sale;

export const getServerSideProps: GetServerSideProps = async () => {
     const products = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
     ).then((res) => res.json());

     return {
          props: {
               products,
          },
     };
};
