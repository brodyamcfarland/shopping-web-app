import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const Sale = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Deals</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1">
                    <div className="border">
                         <h2>Deals!</h2>
                    </div>
               </div>
          </Layout>
     );
};

export default Sale;
