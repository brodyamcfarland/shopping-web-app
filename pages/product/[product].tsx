import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";

const ProductPage = () => {
     const router = useRouter();
     const { id } = router.query;

     return (
          <Layout>
               <Head>
                    <title>Get: Product</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 ">{id}</div>
          </Layout>
     );
};

export default ProductPage;
