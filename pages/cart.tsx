import Head from "next/head";
import Layout from "../components/Layout";
import CartPreviewTag from "../components/CartPreviewTag";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import CheckoutButton from "../components/CheckoutButton";
import Currency from "react-currency-formatter";

const Cart = () => {
     const totalQuantity = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );
     const totalPrice = useSelector(
          (state: RootState) => state.cartCounter.totalPrice
     );
     const saleAmount = useSelector(
          (state: RootState) => state.cartCounter.saleAmount
     );
     const salesTax = totalPrice * 0.0725;

     const calculateShipping = (totalPrice: number) => {
          if (totalPrice < 200) {
               return 10;
          } else {
               return 0;
          }
     };

     const shippingPrice = calculateShipping(totalPrice);

     return (
          <Layout>
               <Head>
                    <title>Get: Cart</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg px-2">
                    <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#171717] max-w-4xl rounded-md">
                         <h2 className="py-2 border-b border-gray-600 font-bold">
                              My Cart
                         </h2>
                         <p className="text-sm text-gray-300 px-4 md:px-20 py-4 border-b border-gray-600">
                              All Orders over $200 will be elegible for FREE
                              Shipping. Users are required to Sign In in order
                              to proceed to checkout. A 7.5% Sales Tax will also
                              be added to the total of all orders.
                         </p>
                         <CartPreviewTag />
                         {totalQuantity === 0 && (
                              <span className="select-none flex items-center justify-center bg-gradient-to-b from-red-500/5 to-transparent text-md text-red-500 gap-2 bg-red-400/10 py-10">
                                   <ExclamationCircleIcon className="h-10 w-10" />
                                   Your Cart is currently empty.
                              </span>
                         )}
                         {totalQuantity > 0 && (
                              <>
                                   {saleAmount > 0 && (
                                        <div className="flex items-center text-xs text-left px-1 py-[2px] border-b border-gray-600 bg-[#252525]">
                                             <span className="text-gray-500 w-fit uppercase text-[9px] pr-[2.2rem]">
                                                  - SALE
                                             </span>
                                             <span>
                                                  <Currency
                                                       quantity={saleAmount}
                                                  />
                                             </span>
                                        </div>
                                   )}
                                   <div className="flex items-center text-xs text-left px-1 py-[2px] border-b border-gray-600 bg-[#252525]">
                                        <span className="text-gray-500 w-fit uppercase text-[9px] pr-[2.33rem]">
                                             + TAX
                                        </span>
                                        <span>
                                             <Currency quantity={salesTax} />
                                        </span>
                                   </div>
                                   <div className="flex items-center text-xs text-left px-1 py-[2px] border-b border-gray-600 bg-[#252525]">
                                        <span className="text-gray-500 w-fit uppercase text-[9px] pr-[.8rem]">
                                             + SHIPPING
                                        </span>
                                        {shippingPrice === 0 ? (
                                             <span>FREE</span>
                                        ) : (
                                             <span>
                                                  <Currency
                                                       quantity={shippingPrice}
                                                  />
                                             </span>
                                        )}
                                   </div>
                                   <div className="flex items-center text-sm text-left px-1 py-[2px] border-b border-gray-600">
                                        <span className="text-white w-fit uppercase text-xs font-semibold pr-[1rem]">
                                             TOTAL
                                        </span>
                                        <span className="text-green-600 font-semibold">
                                             <Currency
                                                  quantity={
                                                       totalPrice +
                                                       salesTax +
                                                       shippingPrice
                                                  }
                                             />
                                        </span>
                                   </div>
                                   <CheckoutButton />
                              </>
                         )}
                    </div>
               </div>
          </Layout>
     );
};

export default Cart;
