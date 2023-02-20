import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const About = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: About</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1">
                    <h2>About</h2>
               </div>
          </Layout>
     );
};

export default About;
