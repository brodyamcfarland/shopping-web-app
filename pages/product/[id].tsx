import Image from "next/image";
import Currency from "react-currency-formatter";
import Layout from "../../components/Layout";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import AddToCartButton from "../../components/AddToCartButton";

const ProductPage = ({ product }: any) => {
     console.log(product);
     return (
          <Layout>
               <Head>
                    <title>Get: Product</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 px-2 py-4">
                    <div className="flex flex-col md:flex-row bg-[#171717] hover:bg-[#0e0e0e] border border-gray-600 rounded-lg max-w-4xl mx-auto gap-2 opacity-90 hover:opacity-100 duration-300">
                         <Image
                              src={product.image}
                              height={1000}
                              width={1000}
                              alt={`Product Image: ${product.id}`}
                              className="w-full md:w-[30rem] h-[10rem] md:h-[24rem] border-b md:border-r-[1px] rounded-t-lg md:rounded-tr-none md:rounded-b-none md:border-b-0 md:rounded-l-lg border-gray-600 bg-white object-contain hover:cursor-pointer hover:brightness-125 duration-300"
                         />
                         <div className="flex flex-col">
                              <h3 className="text-lg py-4 px-10 font-semibold">
                                   {product.title}
                              </h3>
                              <p className="text-sm text-gray-400 text-left py-2 px-10">
                                   {product.description}
                              </p>
                              <div className="flex items-center w-fit m-auto select-none space-x-2">
                                   <div
                                        className={`text-lg ${
                                             product.category ===
                                                  "electronics" &&
                                             "text-sm line-through "
                                        } text-orange-500 font-bold`}
                                   >
                                        <Currency quantity={product.price} />
                                   </div>
                                   {product.category === "electronics" && (
                                        <div className="text-orange-300 text-lg font-bold py-2">
                                             <Currency
                                                  quantity={product.price * 0.8}
                                             />
                                        </div>
                                   )}
                              </div>

                              <AddToCartButton
                                   id={product.id}
                                   title={product.title}
                                   price={product.price}
                                   description={product.description}
                                   image={product.image}
                                   category={product.category}
                              />
                         </div>
                    </div>
               </div>
          </Layout>
     );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
     const { id } = context.query;
     const product = await fetch(
          `https://fakestoreapi.com/products/${id}`
     ).then((res) => res.json());

     return {
          props: {
               product,
          },
     };
};
