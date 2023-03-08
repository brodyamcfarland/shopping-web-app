import Head from "next/head";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Orders = () => {
     const { data: session } = useSession();
     return (
          <Layout>
               <Head>
                    <title>Get: Orders</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1">
                    {!session ? (
                         <div className="flex items-center justify-center">
                              <span className="pt-32">
                                   Please Sign in to continue
                              </span>
                         </div>
                    ) : (
                         <div className="flex items-center justify-center">
                              <span className="pt-32">Order History</span>
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Orders;
