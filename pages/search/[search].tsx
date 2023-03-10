import type { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { ProductQuery, Products } from "../../types";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

const Search = ({ products }: ProductQuery) => {
     const router = useRouter();
     const { search } = router.query;
     return (
          <Layout>
               <Head>
                    <title>Get: Search</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="py-1 border-b items-center justify-center flex gap-1 border-gray-600 bg-[#171717]">
                    Search results for:{" "}
                    <span className="text-gray-400">"{search}"</span>
               </div>
               {products?.filter((fProduct) =>
                    fProduct.title.toLowerCase().includes(`${search}`)
               ).length === 0 && (
                    <div className="flex items-center gap-2 text-orange-500 py-10 mx-auto select-none">
                         <FaceFrownIcon className="h-7 w-7 stroke-2" />
                         No Results Found.
                    </div>
               )}
               <div className="flex flex-1 justify-center w-full overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-5 py-4">
                         {products
                              ?.filter((fProduct) =>
                                   fProduct.title
                                        .toLowerCase()
                                        .includes(`${search}`)
                              )
                              .map(
                                   ({
                                        id,
                                        title,
                                        price,
                                        description,
                                        category,
                                        image,
                                   }: Products) => (
                                        <ProductCard
                                             key={id}
                                             id={id}
                                             title={title}
                                             price={price}
                                             description={description}
                                             category={category}
                                             image={image}
                                        />
                                   )
                              )}
                    </div>
               </div>
          </Layout>
     );
};

export default Search;

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
