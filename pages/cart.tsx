import Head from "next/head";
import Layout from "../components/Layout";

const Cart = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: Home</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1">
                    <div className="border">
                         <h2>My Cart</h2>
                    </div>
               </div>
          </Layout>
     );
};

export default Cart;
