import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
     getDoc,
     collection,
     doc,
     query,
     where,
     getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const Orders = () => {
     const [orders, setOrders] = useState<any[]>();
     const { data: session } = useSession();

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
     }, []);

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
                              {orders?.map((order: any) => (
                                   <div>{order.id}</div>
                              ))}
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Orders;
