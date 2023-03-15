import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
     collection,
     query,
     where,
     getDocs,
     deleteDoc,
     doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";

const Orders = () => {
     const [orders, setOrders] = useState<any[]>();
     const { data: session } = useSession();
     const router = useRouter();
     const convertTimestamp = (timestamp: any) => {
          let date = timestamp.toDate();
          let mm = date.getMonth();
          let dd = date.getDate();
          let yyyy = date.getFullYear();

          date = mm + "/" + dd + "/" + yyyy;
          return date;
     };

     const cancelOrder = async (orderId: string) => {
          const deleteRef = doc(db, "orders", orderId);
          deleteDoc(deleteRef);
          toast.success(`Order Number ${orderId} is now cancelled.`);
     };

     useEffect(() => {
          (async () => {
               const ordersRef = collection(db, "orders");
               const orderQuery = query(
                    ordersRef,
                    where("user", "==", `${session?.user?.email}`)
               );
               const querySnapshot = await getDocs(orderQuery);
               const docs = querySnapshot.docs.map((doc) => {
                    const firebaseOrders = doc.data();
                    firebaseOrders.id = doc.id;
                    return firebaseOrders;
               });

               setOrders(docs);
          })();
     }, [session, orders]);

     return (
          <Layout>
               <Head>
                    <title>Get: Orders</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg px-2">
                    {!session ? (
                         <div className="flex flex-col mx-2 md:mx-auto py-4 my-4 border border-gray-600 bg-[#171717] max-w-4xl rounded-md">
                              Please Sign in to continue
                         </div>
                    ) : (
                         <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#171717] max-w-4xl rounded-md">
                              <h2 className="py-2 border-b border-gray-600 font-bold">
                                   Order History
                              </h2>
                              {orders?.map((order: any) => (
                                   <div
                                        className="flex flex-col md:flex-row relative bg-[#252525] border-gray-600 p-2 border-b"
                                        key={order.id}
                                   >
                                        <div className="flex gap-1 max-w-full md:max-w-[50%] items-center justify-start overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg px-2 py-3">
                                             {order.items.map((item: any) => (
                                                  <Image
                                                       src={item.image}
                                                       key={item.id}
                                                       onClick={() =>
                                                            router.push(
                                                                 `/product/${item.id}`
                                                            )
                                                       }
                                                       height={100}
                                                       width={100}
                                                       alt="Item Details"
                                                       title="Details"
                                                       className="object-fill w-20 h-24 rounded-md hover:cursor-pointer hover:brightness-110 duration-300 shadow-md"
                                                  />
                                             ))}
                                        </div>
                                        <div className="flex flex-col flex-1 text-sm justify-center px-4 py-4">
                                             <div className="flex">
                                                  <h3>Order Number:</h3>
                                                  <span className="pl-2 text-gray-300">
                                                       {order.id}
                                                  </span>
                                             </div>
                                             <div className="flex">
                                                  <h3>Date:</h3>
                                                  <span className="pl-2 text-gray-300">
                                                       {convertTimestamp(
                                                            order.orderedAt
                                                       )}
                                                  </span>
                                             </div>
                                             <div className="flex">
                                                  <h3>Quantity:</h3>
                                                  <span className="pl-2 text-gray-300">
                                                       {order.quantity}
                                                  </span>
                                             </div>
                                             <div className="flex">
                                                  <h3>Price:</h3>
                                                  <span className="text-orange-500 pl-2">
                                                       <Currency
                                                            quantity={
                                                                 order.totalPrice
                                                            }
                                                       />
                                                  </span>
                                             </div>
                                        </div>
                                        <div className="flex items-center justify-center py-2">
                                             <button
                                                  onClick={() =>
                                                       cancelOrder(order.id)
                                                  }
                                                  className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
                                                  title="Cancel Order"
                                             >
                                                  <span className="px-2 py-1 md:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                       Cancel Order
                                                  </span>
                                             </button>
                                        </div>
                                   </div>
                              ))}

                              <div className="h-2" />
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Orders;
