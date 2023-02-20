import Head from "next/head";
import Layout from "../components/Layout";

const Settings = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Settings</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1">
                    <h2>Settings</h2>
               </div>
          </Layout>
     );
};

export default Settings;
