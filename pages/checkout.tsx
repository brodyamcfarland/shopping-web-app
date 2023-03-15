import Head from "next/head";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearCart } from "../state/slices/cartSlice";
import toast from "react-hot-toast";

// This needs to be a protected Auth Route

const Checkout = () => {
     const router = useRouter();
     const dispatch = useDispatch();

     const cart = useSelector((state: RootState) => state.cartCounter.items);

     const totalPrice = useSelector(
          (state: RootState) => state.cartCounter.totalPrice
     );

     const totalQuantity = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );

     const { data: session } = useSession();

     const submitCheckout = async () => {
          let orderNumber =
               session?.user?.name?.slice(0, 4) + Date.now().toString();
          const purchasedItems = {
               orderId: orderNumber,
               quantity: totalQuantity,
               totalPrice: totalPrice,
               items: cart,
               orderedAt: serverTimestamp(),
               user: session?.user?.email,
          };
          console.log(purchasedItems);
          try {
               await setDoc(doc(db, "orders", orderNumber), purchasedItems);
          } catch (error) {
               console.error(error);
               console.log("didnt work");
          }
          dispatch(clearCart());
          toast.success("Checkout Successful. Thank you!");
          router.push("/orders");
     };
     return (
          <Layout>
               <Head>
                    <title>Get: Checkout</title>
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
                         <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#252525] max-w-4xl rounded-md">
                              <h2 className="py-2 border-b border-gray-600 font-bold bg-[#171717] rounded-t-md">
                                   Checkout
                              </h2>
                              <form
                                   className="flex flex-col w-full gap-10 py-4 px-2 md:w-1/2 mx-auto justify-center"
                                   onSubmit={submitCheckout}
                              >
                                   <div className="flex flex-col border">
                                        <h3>Shipping Details</h3>
                                        <label>Address</label>
                                        <input type="text" />
                                        <label>Apt/Unit</label>
                                        <input type="text" />
                                        <label>City</label>
                                        <input type="text" />
                                        <label>State</label>
                                        <input type="text" />
                                        <label>Zip Code</label>
                                   </div>
                                   <div className="flex flex-col gap-1 border">
                                        <h3>Payment Details</h3>
                                        <label>Card Number</label>
                                        <input type="text" />
                                        <label>Expiration Date</label>
                                        <input type="text" />
                                        <label>CVV</label>
                                        <input type="text" />
                                        <label>Cardholder Name</label>
                                        <input type="text" />
                                   </div>
                                   <button
                                        className="px-3 border"
                                        type="submit"
                                   >
                                        Sends Order to DB
                                   </button>
                              </form>
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Checkout;
