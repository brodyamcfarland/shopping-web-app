import Head from "next/head";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";

// This needs to be a protected Auth Route

const Checkout = () => {
     const router = useRouter();

     const cart = useSelector((state: RootState) => state.cartCounter.items);

     const totalPrice = useSelector(
          (state: RootState) => state.cartCounter.totalPrice
     );

     const totalQuantity = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );

     const { data: session } = useSession();

     const submitCheckout = async (e: any) => {
          e.preventDefault();
          const purchasedItems = {
               quantity: totalQuantity,
               totalPrice: totalPrice,
               items: cart,
               orderedAt: serverTimestamp(),
               user: {
                    _id: session?.user?.email!,
                    name: session?.user?.name!,
                    avatar:
                         session?.user?.image! ||
                         `https://ui-avatars.com/api/?name=${session?.user?.name}`,
               },
          };

          let orderNumber =
               session?.user?.name?.slice(0, 4) + Date.now().toString();

          await addDoc(
               collection(
                    db,
                    "users",
                    session?.user?.email!,
                    "orders",
                    orderNumber,
                    "items"
               ),
               purchasedItems
          );
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
                         <div className="flex items-center justify-center">
                              <span className="pt-32">Checkout</span>
                              <button
                                   className="px-3 border"
                                   onClick={submitCheckout}
                              >
                                   Sends Order to DB
                              </button>
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Checkout;
